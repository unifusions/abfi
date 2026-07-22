<?php
// app/Domains/Media/Controllers/MediaController.php

namespace App\Domains\Media\Controllers;

use App\Http\Controllers\Controller;
use App\Domains\Media\Models\Media;
use App\Domains\Media\Requests\UploadMediaRequest;
use App\Domains\Media\Resources\MediaResource;
use App\Domains\Media\Services\MediaService;
use Illuminate\Http\JsonResponse;

class MediaController extends Controller
{
    public function __construct(
        protected MediaService $mediaService
    ) {}

    public function upload(UploadMediaRequest $request): JsonResponse
    {
        $media = $this->mediaService->upload(
            $request->file('file')
        );

        return response()->json([
            'success' => true,
            'data' => new MediaResource($media),
        ]);
    }

    public function destroy(Media $media): JsonResponse
    {
        $this->mediaService->delete($media);

        return response()->json([
            'success' => true,
            'message' => 'Media deleted successfully.',
        ]);
    }
}