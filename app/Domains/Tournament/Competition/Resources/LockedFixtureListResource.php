<?php 

namespace App\Domains\Tournament\Competition\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LockedFixtureListResource extends JsonResource{
    public function toArray($request):array{
        return [
            'id' => $this->id,
            'match_number' => $this->match_number,
            'round' => $this->round,
            'pool' => $this->pool?->name,
            'home' => $this->homeRoster?->name,
            'away' => $this->awayRoster?->name
        ];
    }
}