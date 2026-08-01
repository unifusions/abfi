<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Models\TournamentCompetition;
use Illuminate\Support\Facades\DB;
use DomainException;

class DeletePools
{
    public function handle(TournamentCompetition $competition): void
    {
        if ($competition->pools_locked_at) {
            throw new DomainException('Pools are locked.');
        }

        DB::transaction(function () use ($competition) {

            $competition->pools()->each(function ($pool) {
                $pool->rosters()->detach();
                $pool->delete();
            });

            $competition->update([
                'pools_generated_at' => null,
                'pool_count' => null,
            ]);
        });
    }
}