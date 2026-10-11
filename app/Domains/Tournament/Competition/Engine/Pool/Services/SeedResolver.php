<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
use Illuminate\Support\Collection;

class SeedResolver
{
    /**
     * Return seeded rosters ordered by seed.
     *
     * Seed 1 -> Champion
     * Seed 2 -> Runner Up
     * Seed 3 -> Third Place
     * Seed 4 -> Third Place
     */
    public function resolve(TournamentCompetition $competition): Collection
    {
        // TO DO: 
        // 1. Find previous tournament of same category + competition.
        // 2. Get Champion.
        // 3. Get Runner Up.
        // 4. Get Third Place (1).
        // 5. Get Third Place (2).
        // 6. Match current rosters by association.
        // 7. Return collection ordered by seed.
        $previousTournament = Tournament::query()
        ->where('tournament_type', $competition->tournament->tournament_type)
        ->whereYear('starts_at', '<',  $competition->tournament->starts_at)
        ->orderByDesc('starts_at')
        ->first();


        $previousCompetition = $previousTournament?->competitions()
        // ->where('category_id', $c->category_id)
        ->where('competition_type', $competition->competition_type)->with('rosters.organization.state')
        ->first();

        if (!$previousCompetition) {
            return collect();
        }

        $previousPlacements = collect([
            0 => $previousCompetition->winnerRoster,
            1 => $previousCompetition->runnerRoster,
            2 => $previousCompetition->thirdPlaceRoster ?? null,
            3 => $previousCompetition->thirdPlace2Roster ?? null,
        ])->filter();

        $currentRosters = $competition->rosters()->with('organization.state')->get();

        

        $seededRosters = $previousPlacements->flatMap(function ($previousRoster, $seedPosition) use ($currentRosters) {
            $organizationId = $previousRoster?->organization_id;
    
            if (!$organizationId) {
                return [];
            }
    
            // Find all participating teams in current competition from this organization
            return $currentRosters
                ->where('organization_id', $organizationId)
                ->map(function ($currentRoster) use ($seedPosition) {
                    $currentRoster->seed = $seedPosition;
                    return $currentRoster;
                });
        });
         
      
        return $seededRosters->sortBy('seed')->values();
    }
}