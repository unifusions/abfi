<?php 

namespace App\Domains\Tournament\Resources;
use App\Domains\Tournament\Roster\Resources\RosterListResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TournamentRosterResource extends JsonResource
{
    public function toArray($request)
    {   
       
        $rosters = $this->rosters()->with('competition', 'organization'  )->orderBy('created_at')->get();
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'status' => $this->status,
            'rosters' => RosterListResource::collection($rosters),
            // 'competition' => new CompetitionResource($this->whenLoaded('competition')),
            // 'organization' => new OrganizationResource($this->whenLoaded('organization')),
            // 'players' => PlayerListforRosterResource::collection($this->whenLoaded('players')),
            // 'officials' => OfficialListforRosterResource::collection($this->whenLoaded('officials')),
        ];
    }
}