<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Actions\BuilderRosterAction;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Resources\RosterPlayerResource;
use App\Http\Controllers\Controller;

class RosterBuilderController extends Controller
{
    public function __construct(
        protected BuilderRosterAction $builderRosterAction
    ) {
    }
    public function show(Roster $roster)
    {

        return inertia('roster/roster-builder', $this->builderRosterAction->handle($roster));
    }
    public function save(Roster $roster)
    {

    }
    public function submit(Roster $roster)
    {
        $rosterLength = $roster->players()->count();
        $min = $roster->competition->tournament->category->minimum_players;
        $max = $roster->competition->tournament->category->maximum_players;
        $officialsLength = $roster->officials()->count();
        $min_off = $roster->competition->tournament->category->minimum_officials;
        $max_off = $roster->competition->tournament->category->maximum_officials;
    
        if (($rosterLength >= $min && $rosterLength <= $max) && ($officialsLength>= $min_off && $officialsLength <= $max_off)) {
            $roster->status = RosterStatusEnum::SUBMITTED->value;
            $roster->submitted_at = now();
            $roster->save();
            return redirect()->route('rosters.show', $roster)->with(
            [
                'success' => "{$roster->name} has been submitted successfully"
            ]
        );
        }
        return back()->with([
            'error' => "Criteria of minimum required players/officials doesnt meet."
        ]);

        
    }
}