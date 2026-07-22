<?php

namespace App\Domains\Media\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
 

class MediaResource extends JsonResource{
    public function toArray(Request $request){
        return [
            'id' => $this->id,
            'name' => $this->file_name,
            'disk' => $this->disk,
            'path' => $this->path,
            'url' => Storage::disk($this->disk)->url($this->path),
            'mime_type' => $this->mime_type,
            'extension' => $this->extension,
            'size' => $this->size,
            'width' => $this->width,
            'height' => $this->height,
        ];
    }
}