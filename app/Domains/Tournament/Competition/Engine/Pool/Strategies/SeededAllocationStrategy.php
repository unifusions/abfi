<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Strategies;

use App\Domains\Tournament\Competition\Engine\Pool\Strategies\Contracts\AllocationStrategy;
use Illuminate\Support\Collection;

class SeededAllocationStrategy implements AllocationStrategy
{
    /**
     * @param Collection $rosters        Remaining (unseeded) rosters
     * @param int        $poolCount
     * @param Collection $seededRosters  Seeded rosters ordered by seed (1,2,3...)
     *
     * @return array<int, Collection>
     */
    public function allocate(
        Collection $rosters,
        int $poolCount,
        Collection $seededRosters = new Collection(),
    ): array {

        $pools = [];

        // Initialize pools
        for ($i = 0; $i < $poolCount; $i++) {
            $pools[$i] = collect();
        }

        /*
        |--------------------------------------------------------------------------
        | Step 1: Allocate seeded teams
        |--------------------------------------------------------------------------
        |
        | Seed 1 -> Pool A
        | Seed 2 -> Pool B
        | Seed 3 -> Pool C
        | Seed 4 -> Pool D
        |
        */

        $seededRosters
            ->values()
            ->each(function ($roster, $index) use (&$pools, $poolCount) {

                if ($index >= $poolCount) {
                    return;
                }

                $roster->seed = $index + 1;

                $pools[$index]->push($roster);
            });

        /*
        |--------------------------------------------------------------------------
        | Step 2: Randomly distribute remaining teams
        |--------------------------------------------------------------------------
        */

        $startPool = $seededRosters->count();

        $rosters
            ->shuffle()
            ->values()
            ->each(function ($roster, $index) use (&$pools, $poolCount, $startPool) {

                $poolIndex = ($index + $startPool) % $poolCount;

                $pools[$poolIndex]->push($roster);
            });

        return $pools;
    }
}