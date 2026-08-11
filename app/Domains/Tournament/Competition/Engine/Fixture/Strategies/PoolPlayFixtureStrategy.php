<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Strategies;


use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use App\Domains\Tournament\Competition\Engine\Fixture\Services\RoundRobinGenerator;
use App\Domains\Tournament\Models\TournamentCompetition;
use Illuminate\Support\Facades\DB;

class PoolPlayFixtureStrategy implements FixtureStrategy
{
    public function __construct(protected RoundRobinGenerator $generator)
    {
    }
    public function generate(TournamentCompetition $competition): void
    {
        DB::transaction(function () use ($competition) {

            $matchNumber = 1;

            $competition->load([
                'pools.poolRosters.roster',
            ]);

            foreach ($competition->pools as $pool) {

                $rosters = $pool->poolRosters
                    ->sortBy('position')
                    ->pluck('roster')
                    ->values();

                $count = $rosters->count();

                $rounds = $this->generator->generate($rosters);


                foreach ($rounds as $roundNumber => $matches) {

                    foreach ($matches as $match) {

                        TournamentFixture::create([
                            'tournament_competition_id' => $competition->id,
                            'tournament_pool_id' => $pool->id,

                            'round' => $roundNumber + 1,
                            'match_number' => $matchNumber++,

                            'home_roster_id' => $match['home']->id,
                            'away_roster_id' => $match['away']->id,

                            'status' => FixtureStatusEnum::SCHEDULED,
                        ]);
                    }
                }
            }

            $competition->update([
                'fixture_generated_at' => now(),
            ]);

        });
    }
}