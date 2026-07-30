<?php

namespace App\Domains\Tournament\Roster\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RosterDetailPlayerResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,

            'name' => implode(' ', [$this->player->first_name, $this->player->middle_name]),
            'profile_photo' => $this->player->getMediaUrl(MediaCollectionEnum::PROFILE),
            'positions' => $this->player->positions->pluck('name'),
            'age' => Carbon::parse($this->player->dob)->age,
            'code' => $this->player->player_code,
            'dob' => $this->player?->dob->format('d/m/Y')

        ];
    }
}