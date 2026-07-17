<?php

namespace App\Domains\Organization\Resource;

use Illuminate\Http\Resources\Json\JsonResource;

class OrganizationDropdownResource extends JsonResource{

    public function toArray($request): array 
    {
        return [
            'label' => $this->name,
            'value' => $this->id
        ];
    }
}