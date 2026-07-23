<?php

namespace App\Domains\Shared\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectRoleResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'label' => $this->name,
            'value' => $this->id,
             
        ];
    }
}