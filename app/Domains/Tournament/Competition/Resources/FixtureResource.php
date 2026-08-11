<?php

namespace App\Domains\Tournament\Competition\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FixtureResource extends JsonResource
{

    public function toArray($request): array
    {
         return [
            'id' => $this->id,
           'pool' => $this->pool, 
            'home_roster' => $this->homeRoster()->get()->map(function ($roster) {
                return [
                    'id' => $roster->id,
                    'name' => $roster->name,
                    'association' => $roster->organization->name,
                    'state' => $roster->organization->state->short_code
                ];
            }),

            'away_roster' => $this->awayRoster()->get()->map(function ($roster) {
                return [
                    'id' => $roster->id,
                    'name' => $roster->name,
                    'association' => $roster->organization->name,
                    'state' => $roster->organization->state->short_code
                ];
            }),
        ];
    }
}