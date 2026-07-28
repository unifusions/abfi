<?php

namespace App\Domains\Media\Traits;

use App\Domains\Media\Enums\MediaCollectionEnum;
 
use App\Domains\Media\Models\Media;
use App\Domains\Media\Services\MediaService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use App\Domains\Media\Models\Mediable;
use Illuminate\Support\Facades\Storage;

trait HasMedia
{
    /**
     * Morph relationship.
     */
    public function media(): MorphMany
    {
        return $this->morphMany(
            Mediable::class,
            'mediable'
        );
    }

    /**
     * Get all media.
     */
    public function getMedia(
        ?MediaCollectionEnum $collection = null
    ): Collection {

        return $this->media()

            ->when(
                $collection,
                fn ($query) => $query->where(
                    'collection',
                    $collection->value
                )
            )

            ->with('media')

            ->orderBy('sort_order')

            ->get()

            ->pluck('media');

    }

    /**
     * Get first media.
     */
    public function getFirstMedia(
        MediaCollectionEnum $collection
    ): ?Media {

        return $this->media()

            ->where(
                'collection',
                $collection->value
            )

            ->with('media')

            ->first()

            ?->media;

    }

    /**
     * Check if collection has media.
     */
    public function hasMedia(
        MediaCollectionEnum $collection
    ): bool {


        return $this->media()

            ->where(
                'collection',
                $collection->value
            )

            ->exists();

    }

    /**
     * Attach media.
     */

    public function attachProfileMedia(
        $media
    ){
        $mediaModel = Media::findOrFail($media);
        return app(MediaService::class)->attach($this, $mediaModel, MediaCollectionEnum::PROFILE);
    }
    public function attachMedia(
        Media $media,
        MediaCollectionEnum $collection
    ): Mediable {

        return app(MediaService::class)

            ->attach(
                $this,
                $media,
                $collection
            );

    }

    /**
     * Attach many.
     */
    public function attachManyMedia(
        array $items
    ): void {

        app(MediaService::class)

            ->attachMany(
                $this,
                $items
            );

    }

    /**
     * Replace media.
     */
    public function replaceMedia(
        Media $media,
        MediaCollectionEnum $collection
    ): Mediable {

        return app(MediaService::class)

            ->attach(
                $this,
                $media,
                $collection
            );

    }

    /**
     * Detach a collection.
     */
    public function detachMedia(
        MediaCollectionEnum $collection
    ): void {

        app(MediaService::class)

            ->detachCollection(
                $this,
                $collection
            );

    }

    public function getMediaUrl(MediaCollectionEnum $collection): ?string
{
        
    $media = $this->mediaLinks
    ?->firstWhere('collection', $collection->value)
        ?->media;

    if (! $media) {
        return null;
    }

    return Storage::disk($media->disk)->url($media->path);
}
}