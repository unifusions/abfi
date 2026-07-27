<?php

namespace App\Domains\Player\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerListforRosterResource extends JsonResource{
    public function toArray($request){
        return [
            'id' => $this->id,
             'name' =>implode(' ' , [$this->first_name, $this->middle_name, $this->last_name]),
        
            'position' => $this->positions->pluck('name'),
            'age' =>Carbon::parse($this->dob)->age,
            'code' => $this->player_code,
            'profile' => $this->getMediaUrl(MediaCollectionEnum::PROFILE)
         ];
    }
}