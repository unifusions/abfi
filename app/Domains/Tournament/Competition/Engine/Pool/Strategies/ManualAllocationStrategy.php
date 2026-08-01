<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Strategies;

use App\Domains\Tournament\Competition\Engine\Pool\Strategies\Contracts\AllocationStrategy;
use DomainException;
use Illuminate\Support\Collection;

class ManualAllocationStrategy implements AllocationStrategy
{
    public function allocate(
        Collection $rosters,
        int $poolCount,
        Collection $seededRosters = new Collection(),
    ): array {
        throw new DomainException(
            'Manual allocation must be performed through the user interface.'
        );
    }
}