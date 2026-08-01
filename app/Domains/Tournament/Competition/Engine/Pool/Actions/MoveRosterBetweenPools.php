<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
 
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Support\Facades\DB;
use DomainException;

class MoveRosterBetweenPools
{
    public function handle(
        TournamentPool $from,
        TournamentPool $to,
        Roster $roster,
    ): void {

        if ($from->competition_id !== $to->competition_id) {
            throw new DomainException('Pools must belong to same competition.');
        }

        if ($from->competition->pools_locked_at) {
            throw new DomainException('Pools are locked.');
        }

        DB::transaction(function () use ($from, $to, $roster) {

            $pivot = $from
                ->rosters()
                ->whereKey($roster)
                ->first()
                ?->pivot;

            $from->rosters()->detach($roster);

            $to->rosters()->attach($roster, [
                'seed' => $pivot?->seed,
            ]);
        });
    }
}