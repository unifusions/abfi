<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Resources\RosterPlayerResource;
use App\Http\Controllers\Controller;

class RosterReviewController extends Controller
{
    public function review(Roster $roster)
    {
        return inertia('roster/review/roster-review', [
            'roster' => $roster,
            'roster_players' => RosterPlayerResource::collection(
                $roster->players
            )
        ]);
    }

    public function approve(Roster $roster){
        $roster->status = RosterStatusEnum::APPROVED->value;
        $roster->save();
        return redirect()->route('tournaments.show', $roster->competition->tournament)->with([
                'success' => "Roster {$roster->name} has been approved"
        ]);
    }
}
