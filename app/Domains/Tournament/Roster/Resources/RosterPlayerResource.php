<?php

namespace App\Domains\Tournament\Roster\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RosterPlayerResource extends JsonResource
{
    public function toArray($request)
    {
        $player = $this->player;
        return [
            'id' => $this->id,
            'player_id' => $player->id,
            'name' => implode(' ', [$player->first_name, $player->middle_name, $player->last_name]),
            'position' => $player->positions->pluck('code'),
            'age' => Carbon::parse($player->dob)->age,
        ];
    }
}