<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Models\TournamentCompetition;
use DomainException;

class LockPools
{
    public function handle(TournamentCompetition $competition): void
    {
        if (! $competition->pools()->exists()) {
            throw new DomainException('Generate pools first.');
        }

        $competition->update([
            'pools_locked_at' => now(),
        ]);
    }
}