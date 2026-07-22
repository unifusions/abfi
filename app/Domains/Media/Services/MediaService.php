<?php

namespace App\Domains\Media\Services;

use App\Domains\Media\Enums\MediaCollection;
use App\Domains\Media\Enums\MediaCollectionEnum;

use App\Domains\Media\Models\Media;
use App\Domains\Media\Models\Mediable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
 

class MediaService
{
    /**
     * Upload file.
     */
    public function upload(UploadedFile $file): Media
    {
        $path = $file->store(
            date('Y') . '/' . date('m'),
            'public'
        );

        [$width, $height] = $this->dimensions($file);

        return Media::create([

            'id' => Str::uuid(),

            'disk' => 'public',

            'path' => $path,

            'file_name' => $file->getClientOriginalName(),

            'mime_type' => $file->getMimeType(),

            'extension' => $file->extension(),

            'size' => $file->getSize(),

            'width' => $width,

            'height' => $height,

            'created_by' => auth()->id(),

            'is_temporary' => true,

        ]);
    }

    /**
     * Attach one media.
     */
    public function attach(
        Model $model,
        Media $media,
        MediaCollectionEnum $collection
    ): Mediable {

        return DB::transaction(function () use ($model, $media, $collection) {

            if ($collection->isSingle()) {

                $this->detachCollection(
                    $model,
                    $collection
                );
            }

            $media->update([
                'is_temporary' => false
            ]);

            return Mediable::create([

                'media_id' => $media->id,

                'mediable_type' => $model::class,

                'mediable_id' => $model->getKey(),

                'collection' => $collection->value,

            ]);

        });
    }

    /**
     * Attach multiple.
     */
    public function attachMany(
        Model $model,
        array $items
    ): void {

        foreach ($items as $item) {

            $this->attach(

                $model,

                Media::findOrFail($item['id']),

                MediaCollectionEnum::from(
                    $item['collection']
                )

            );

        }

    }

    /**
     * Detach all media from a collection.
     */
    public function detachCollection(
        Model $model,
        MediaCollectionEnum $collection
    ): void {

        $model->media()

            ->where('collection', $collection->value)

            ->delete();

    }

    /**
     * Delete media permanently.
     */
    public function delete(Media $media): void
    {
        DB::transaction(function () use ($media) {

            $media->mediables()->delete();

            Storage::disk($media->disk)
                ->delete($media->path);

            $media->delete();

        });
    }

    /**
     * Delete abandoned uploads.
     */
    public function cleanupTemporary(): void
    {
        Media::query()

            ->where('is_temporary', true)

            ->where('created_at', '<', now()->subDay())

            ->chunkById(100, function ($media) {

                foreach ($media as $file) {

                    $this->delete($file);

                }

            });
    }

    /**
     * Image dimensions.
     */
    protected function dimensions(
        UploadedFile $file
    ): array {

        if (
            !str_starts_with(
                $file->getMimeType(),
                'image/'
            )
        ) {

            return [null, null];

        }

        $size = @getimagesize(
            $file->getRealPath()
        );

        if (!$size) {

            return [null, null];

        }

        return [

            $size[0],

            $size[1]

        ];

    }
}