<?php 

namespace App\Domains\Tournament\Competition\Engine\Pool\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PoolStandingResource extends JsonResource{
    public function toArray($request):array {
        
        return [
                'id' => $this->id,
                'name' => $this->name,
                'teams' => $this->poolRosters()->count(),
                'standings' => $this->standings()->orderBy('position', 'asc')->get()->map(
                    function($standing) {
                        return [
                            'id' => $standing->id,
                            'roster_name' => $standing->roster->name,
                            'roster_state' => $standing->roster->organization->state->short_code,
                            'position' => $standing->position,
                            'played' => $standing->played,
                            'won' => $standing->won,
                            'lost' => $standing->lost,
                            'draw' => $standing->draw,
                        ];
                    }
                )
        ];
    }
}