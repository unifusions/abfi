<?php


namespace App\Domains\Tournament\Competition\Controllers;

use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;

class CompetitionController
{
    public function index()
    {
        // return inertia('tournament/competition/index');
    }

    public function builder(Tournament $tournament, TournamentCompetition $competition)
    {
        $competition->load(['pools.rosters.organization']);
        $approvedRosters = $competition->rosters()
            ->where('status', RosterStatusEnum::APPROVED)
            ->with([
                'organization.state',
            ])
             
            ->get();

        $assignedRosterIds = $competition->pools
            ->flatMap(fn($pool) => $pool->rosters)
            ->pluck('id');

        $unassignedRosters = $approvedRosters
            ->whereNotIn('id', $assignedRosterIds)
            ->values();

        return inertia(
            'tournament/competition/pool-index',
            [
                'tournament' => $tournament,
                'category' => $tournament->category->code,
                'competition' => $competition,
                'pools' => $competition->pools,
                'approvedRosters' => $approvedRosters,
                'unassignedRosters' => $unassignedRosters,
                
            ]
        );
    }

}