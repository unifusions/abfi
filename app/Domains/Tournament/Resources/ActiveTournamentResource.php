<?php

namespace App\Domains\Tournament\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class ActiveTournamentResource extends JsonResource
{

    public function toArray($request): array
    {


        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'starts_at' => $this->starts_at?->format('M j'),
            'ends_at' => $this->ends_at?->format('M j, Y'),
            'status' => $this->status,
            'venue' => $this->venue?->name . ',' . $this->venue?->state?->short_code,
            'organization' => $this->organization?->name,
            'competitions' => $this->competitions()->withCount('rosters')->get()
        ];
    }
}