<?php 

namespace App\Domains\Player\Resources;

use App\Domains\Media\Enums\MediaCollectionEnum;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerListResource extends JsonResource{
    public function toArray($request):array
    {return[
        'id' => $this->id,
        'player_code'=>$this->player_code,
        'name' => implode(' ',[ $this->first_name, $this->middle_name, $this->last_name]),
        'first_name' => $this->first_name,
        'middle_name' => $this->middle_name,
        'last_name' => $this->last_name,
        
        
        'association' => $this->organization?->name,
        'father_name'=> $this->father_name,
        'gender'=> ucfirst($this->gender),
       'positions' => $this->positions->pluck('name'),
        'created_at' => $this->created_at->format('d-m-Y H:i:s'),
         'profile_photo' => $this->getMediaUrl(MediaCollectionEnum::PROFILE),
         'age' => Carbon::parse($this->dob)->age,
    ];}
}