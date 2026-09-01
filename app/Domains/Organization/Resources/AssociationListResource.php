<?php

namespace App\Domains\Organization\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AssociationListResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'state_name' => $this->state?->name,
            'state_code' => $this->state?->short_code,
            'region' => $this->state?->region,
            'secretary' => $this->secretary,
            'president' => $this->president,
            'address' => implode(' ', [$this->address_line_1, $this->address_line_2]),
        ];
    }
}