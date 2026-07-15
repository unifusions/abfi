<?php
namespace App\Domains\Venue\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VenueResource extends JsonResource{
public function toArray($request) : array{
    return [
        'id' => $this->id,
            'value' => $this->id,
            'name' => $this->name,
            'label' => "{$this->name}, {$this->state?->short_code}",
            'state_name' => $this->state?->name,
            'state_code' => $this->state?->short_code,
    ];
}
}