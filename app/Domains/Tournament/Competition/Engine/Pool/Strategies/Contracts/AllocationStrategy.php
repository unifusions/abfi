<?php 

namespace App\Domains\Tournament\Competition\Engine\Pool\Strategies\Contracts;

use Illuminate\Support\Collection;

interface AllocationStrategy{
    public function allocate(
        Collection $rosters,
        int $poolCount,
        Collection $seededRosters = new Collection(),
    ): array;
}