<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Strategies;

use App\Domains\Tournament\Competition\Engine\Pool\Strategies\Contracts\AllocationStrategy;
use Illuminate\Support\Collection;

class RandomAllocationStrategy implements AllocationStrategy
{
    public function allocate(
        Collection $rosters,
        int $poolCount,
        Collection $seededRosters = new Collection(),
    ): array {

        $groups = [];

        for ($i = 0; $i < $poolCount; $i++) {
            $groups[$i] = collect();
        }

        $rosters
            ->shuffle()
            ->values()
            ->each(function ($roster, $index) use (&$groups, $poolCount) {
                $groups[$index % $poolCount]->push($roster);
            });

        return $groups;
    }
}