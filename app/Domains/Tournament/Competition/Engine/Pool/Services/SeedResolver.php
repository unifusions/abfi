<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
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

        return collect();
    }
}