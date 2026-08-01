<?php

namespace App\Domains\Tournament\Roster\Actions;

use App\Domains\Official\Models\Official;
use App\Domains\Official\Resources\OfficialResourceForRoster;
use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Resources\RosterOfficialResource;
use App\Domains\Tournament\Roster\Resources\RosterPlayerResource;

class BuilderRosterAction{
    public function handle(Roster $roster){


        $gender =$roster->competition->gender();
   
        return [
            'roster' => $roster,
            'players' => PlayerListforRosterResource::collection(
                Player::forCompetition($roster->competition)->get()
                
            ),
            'officials' => OfficialResourceForRoster::collection(Official::all()),
            'roster_players' => RosterPlayerResource::collection($roster->players),
            'roster_officials' =>RosterOfficialResource::collection( $roster->officials),
            'category' => $roster->competition->tournament->category,
            'last_date' => $roster->competition
                ->tournament
                ->registration_close_at
                ->format('M d, Y g:i A'),
        ];
        
        }
}