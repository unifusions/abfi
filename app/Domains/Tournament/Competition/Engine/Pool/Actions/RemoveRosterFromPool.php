<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
 
use App\Domains\Tournament\Roster\Models\Roster;
use DomainException;

class RemoveRosterFromPool
{
    public function handle(
        TournamentPool $pool,
        Roster $roster,
    ): void {

        if ($pool->competition->pools_locked_at) {
            throw new DomainException('Pools are locked.');
        }

        $pool->rosters()->detach($roster);
    }
}