<?php

namespace App\Domains\Player\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\Media\Resources\MediaResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerResource extends JsonResource
{
    public function toArray($request)
    {


        return [
            'id' => $this->id,
            'player_code' => $this->player_code,
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'gender' => ucfirst($this->gender),
            'positions' => $this->positions->pluck('name'),
            'profile_photo' => $this->getMediaUrl(MediaCollectionEnum::PROFILE),
            'details' => [
                'created_at' => $this->created_at->format('d-m-Y H:i:s'),
                'dob' => Carbon::createFromFormat('Y-m-d', $this->dob)->format('d / M / Y'),
                'blood_group' => $this->blood_group ?? null,
                'association' => $this->organization?->name,
            ],
            'contact' => [
                'father_name' => $this->father_name,
                'phone' => $this->phone,
                'email' => $this->email,
                'full_address' => $this->address . ', ' . $this->city .', '. $this->pin_code,  $this->state->name,
           'aadhar' => $this->aadhar_no,
           'passport' => $this->passport_no
                ]
        ];
    }

}