<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
 
use App\Domains\Tournament\Roster\Models\Roster;
use DomainException;

class AddRosterToPool
{
    public function handle(
        TournamentPool $pool,
        Roster $roster,
    ): void {

        if ($pool->competition->pools_locked_at) {
            throw new DomainException('Pools are locked.');
        }

        if (
            $pool->competition
                ->pools()
                ->whereHas('rosters', fn ($q) => $q->whereKey($roster))
                ->exists()
        ) {
            throw new DomainException('Roster already belongs to a pool.');
        }

        $pool->rosters()->attach($roster);
    }
}