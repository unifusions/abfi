<?php 

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Official\Models\Official;
use App\Domains\Official\Resources\OfficialResourceForRoster;
use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Resources\RosterDetailPlayerResource;
use App\Http\Controllers\Controller;

class RosterMemberReplaceController extends Controller {
    public function index(Roster $roster){
        return inertia('roster/review/roster-member-replace', [
            'roster' => $roster,
            'players' => RosterDetailPlayerResource::collection($roster->players),
            'officials' => OfficialResourceForRoster::collection($roster->officials),
            'available_players' =>PlayerListforRosterResource::collection(
                Player::forCompetition($roster->competition)->get()
                
            ),
            'available_officials' => OfficialResourceForRoster::collection(Official::all()),
            ]);
    }
}