<?php 

namespace App\Domains\Tournament\Roster\Resources;

use App\Domains\Player\Resources\PlayerResource;
use Illuminate\Http\Resources\Json\JsonResource;
class RosterReplacementHistoryResource extends JsonResource{
    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('d/m/Y'),
            'replacement' =>  PlayerResource::make($this->replacementPlayer),
            'replacing' => PlayerResource::make($this->replacingPlayer)
        ];
    }
}