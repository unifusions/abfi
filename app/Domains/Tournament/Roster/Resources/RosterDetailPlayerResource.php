<?php 

namespace   App\Domains\Tournament\Roster\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RosterDetailPlayerResource extends JsonResource{
    public function toArray($request) :  array {
        return [
            'id' => $this->id,
            
            'name' => implode(' ',  [$this->player->first_name, $this->player->middle_name])
        ];
    }
}