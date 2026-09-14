<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Official\Models\Official;
use App\Domains\Official\Resources\OfficialResourceForRoster;
use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Models\RosterPlayer;
use App\Domains\Tournament\Roster\Models\RosterPlayerReplacement;
use App\Domains\Tournament\Roster\Resources\RosterDetailPlayerResource;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;


class RosterMemberReplaceController extends Controller
{
    public function index(Roster $roster)
    {
        return inertia('roster/review/roster-member-replace', [
            'roster' => $roster,
            'association' => $roster->organization,
            'tournament' => $roster->competition->tournament->load('category', 'venue'),
            'competition' => $roster->competition,
            'players' => RosterDetailPlayerResource::collection($roster->players),
            'officials' => OfficialResourceForRoster::collection($roster->officials),
            'available_players' => PlayerListforRosterResource::collection(
                Player::forCompetition($roster->competition)
                    ->where('state_id', $roster->organization->state->id)
                    ->whereNotIn(
                        'id',
                        $roster->players()->pluck('player_id')
                    )->get()

            ),
            'available_officials' => OfficialResourceForRoster::collection(Official::all()),
        ]);
    }

    public function replaceMember(Request $request, Roster $roster)
    {

        $data = $request->all();

        DB::transaction(function () use ($roster, $data) {
            $replacingPlayerId = RosterPlayer::find($data['replacing_id']);
            
          
            $replacementPlayer = RosterPlayer::create([
                'roster_id' => $roster->id,
                'player_id' => $data['replacement_id']
            ]);
           
 
            RosterPlayerReplacement::create([
                'roster_id' => $roster->id,
                'type' => 'player',
                'replacing_id' => $replacingPlayerId->player_id,
                'replacement_id' => $replacementPlayer->player_id,
                'reason' => $data['reason'],
                'remarks' => $data['remarks'],

                'replaced_by' => auth()->user()->id


            ]);
            
              $roster->players()->where('id', $data['replacing_id'])->delete();
        });

        return back()->with('success', 'Player replaced successfully.');

    }
}