<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Strategies\FixtureStrategy;
use App\Domains\Tournament\Competition\Engine\Fixture\Strategies\PoolPlayFixtureStrategy;
use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Models\TournamentCompetition;

 
class FixtureGenerator
{
    public function generate(TournamentCompetition $competition): void
    {
        $this->resolve($competition)->generate($competition);
    }

    protected function resolve(TournamentCompetition $competition): FixtureStrategy
    {
     
         return match ($competition->tournament->competition_format) {

            TournamentFormatEnum::POOL_PLAY =>
                app(PoolPlayFixtureStrategy::class),

            // TournamentFormatEnum::ROUND_ROBIN =>
            //     app(RoundRobinFixtureStrategy::class),

            // TournamentFormatEnum::DOUBLE_ELIMINATION =>
            //     app(DoubleEliminationFixtureStrategy::class),
        };
    }
}