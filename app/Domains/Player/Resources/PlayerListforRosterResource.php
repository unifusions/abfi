<?php

namespace App\Domains\Player\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerListforRosterResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => implode(' ', [$this->first_name, $this->middle_name, $this->last_name]),

            'position' => $this->positions->pluck('code')->toArray(),
            'age' => Carbon::parse($this->dob)->age,
            'code' => $this->player_code,
            'profile' => $this->getMediaUrl(MediaCollectionEnum::PROFILE),




            'profile_photo' => $this->getMediaUrl(MediaCollectionEnum::PROFILE),
            'positions' => $this->positions->pluck('name'),

            'dob' => $this->dob->format('d/m/Y'),
            'blood_group' => $this->blood_group

        ];
    }
}