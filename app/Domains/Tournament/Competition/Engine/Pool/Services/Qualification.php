<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Competition\Engine\Knockout\Services\KnockoutGeneratorService;
use App\Domains\Tournament\Competition\Engine\Standing\Models\PoolStanding;
use App\Domains\Tournament\Models\TournamentCompetition;
use Illuminate\Support\Collection;
 

class Qualification
{
    public function qualify(TournamentCompetition $competition): Collection
    {
        $qualified = collect();

        foreach ($competition->pools as $pool) {

            $qualified = $qualified->merge(
                PoolStanding::query()
                    ->where('tournament_pool_id', $pool->id)
                    ->orderBy('position')
                    ->limit(2) // Top 2 (replace later with strategy)
                    ->get()
            );
        }

        app(KnockoutGeneratorService::class)
            ->generate($competition, $qualified);

        return $qualified;
    }
}