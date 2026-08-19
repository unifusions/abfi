<?php

namespace App\Domains\Tournament\Resources;

use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use Illuminate\Http\Resources\Json\JsonResource;

class TournamentListResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'starts_at' => $this->starts_at->format('d M Y'),
            'ends_at' => $this->ends_at->format('d M Y'),
            'organizer' => $this->organization?->name,
            'venue' => $this->venue?->name,
            'status' => $this->status,
            'rosters' => $this->rosters()->where('status', RosterStatusEnum::APPROVED->value)
                ->count()
        ];
    }
}