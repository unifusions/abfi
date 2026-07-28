<?php


namespace App\Domains\Official\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OfficialListResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'official_code' => $this->official_code,
            'name' => implode(' ', [$this->first_name, $this->middle_name, $this->last_name]),
            // 'media' => $this->hasMedia(MediaCollectionEnum::PROFILE)
            'profile_photo' => $this->getMediaUrl(MediaCollectionEnum::PROFILE),
            'type' => $this->type . ' Official',
            'age' => Carbon::parse($this->dob)->age,
            'association' => $this->organization?->name,
            'state' => $this->organization?->state?->name,
               'gender'=> ucfirst($this->gender),
        ];
    }
}