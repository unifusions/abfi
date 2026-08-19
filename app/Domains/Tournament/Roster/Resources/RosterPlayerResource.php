<?php

namespace App\Domains\Tournament\Roster\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RosterPlayerResource extends JsonResource
{
    public function toArray($request)
    {
        $player = $this->player;
        if(!$player){
            return [];
        }
        return [
            'id' => $this->id,
            'code' => $player->player_code,
            'player_id' => $player?->id,
            'name' => implode(' ', [$player?->first_name, $player?->middle_name, $player?->last_name]),
            'position' => $player?->positions->pluck('code'),
            'position_names' => $player?->positions()->orderBy('display_order')->pluck('name'),
            'age' => Carbon::parse($player?->dob)->age,
            'profile_photo' => $player->getMediaUrl(MediaCollectionEnum::PROFILE),
            'dob' => $player->dob->format('d/m/Y'),
            'approved' => $this->is_approved,
            'requestedResubmission' => $this->is_request_resubmission
        ];
    }
}