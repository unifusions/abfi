<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Models\RosterPlayer;
use App\Domains\Tournament\Roster\Resources\RosterPlayerResource;
use App\Domains\Tournament\Roster\Services\RosterPlayerService;
use App\Http\Controllers\Controller;

class RosterReviewController extends Controller
{

    public function __construct(protected RosterPlayerService $service)
    {
    }
    public function review(Roster $roster)
    {
        return inertia('roster/review/roster-review', [
            'roster' => $roster,
            'roster_players' => RosterPlayerResource::collection(
                $roster->players
            )
        ]);
    }

    public function approvePlayer(Roster $roster, RosterPlayer $rosterPlayer)
    {

        $this->service->approvePlayer($rosterPlayer);
        return back()->with([
            'success' => "Roster Player {$rosterPlayer->player->player_code} has been approved"
        ]);
    }
    public function approve(Roster $roster)
    {

        $competition = $roster->competition;
        $unverifiedPlayers = $roster->players
            ->where('is_approved', false);

        if ($unverifiedPlayers->isNotEmpty()) {
            return back()->with([
                'error' => 'All players in the roster must be approved before the roster can be approved.',
            ]);
        }

        $roster->status = RosterStatusEnum::APPROVED->value;
        $roster->save();

        if ($competition->submittedRosters()->count() === $competition->approvedRosters()->count()) {
            $competition->phase = CompetitionPhaseEnum::VERIFICATION;
            $competition->save();
        }

        return redirect()->route('tournaments.show', $roster->competition->tournament)->with([
            'success' => "Roster {$roster->name} has been approved"
        ]);
    }
}
