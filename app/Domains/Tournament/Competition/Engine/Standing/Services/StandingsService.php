<?php

namespace App\Domains\Tournament\Competition\Engine\Standing\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Competition\Engine\Standing\Models\PoolStanding;
use DB;

class StandingsService
{
    public function calculatePool(TournamentPool $pool)
    {

        DB::transaction(function () use ($pool) {

            PoolStanding::where('tournament_pool_id', $pool->id)->delete();

            $standings = [];

            $fixtures = $pool->fixtures()
                ->where('status', FixtureStatusEnum::COMPLETED)
                ->orderBy('round')
                ->orderBy('match_number')
                ->get();

            foreach ($fixtures as $fixture) {

                $home = $fixture->home_roster_id;
                $away = $fixture->away_roster_id;

                $standings[$home] ??= $this->blankRow($pool, $home);
                $standings[$away] ??= $this->blankRow($pool, $away);

                // Played
                $standings[$home]['played']++;
                $standings[$away]['played']++;

                // Runs
                $standings[$home]['runs_for'] += $fixture->home_score;
                $standings[$home]['runs_against'] += $fixture->away_score;

                $standings[$away]['runs_for'] += $fixture->away_score;
                $standings[$away]['runs_against'] += $fixture->home_score;

                // Win / Loss / Draw
                if ($fixture->home_score > $fixture->away_score) {

                    $standings[$home]['won']++;
                    $standings[$home]['points'] += 2;

                    $standings[$away]['lost']++;

                } elseif ($fixture->away_score > $fixture->home_score) {

                    $standings[$away]['won']++;
                    $standings[$away]['points'] += 2;

                    $standings[$home]['lost']++;

                } else {

                    $standings[$home]['draw']++;
                    $standings[$away]['draw']++;

                    $standings[$home]['points']++;
                    $standings[$away]['points']++;
                }
            }
            foreach (array_keys($standings) as $key) {
                $standings[$key]['run_difference'] =
                    $standings[$key]['runs_for'] - $standings[$key]['runs_against'];
            }

            uasort($standings, function ($a, $b) {

                return
                    $b['points'] <=> $a['points']
                    ?: $b['run_difference'] <=> $a['run_difference']
                    ?: $b['runs_for'] <=> $a['runs_for'];
            });

            $position = 1;
            foreach ($standings as $standing) {



                $standing['position'] = $position++;
                 PoolStanding::create($standing);
                // try {
                //     PoolStanding::create($standing);
                // } catch (\Throwable $e) {
                //     dd($standing, $e->getMessage(), $e->getTraceAsString());
                // }
                // PoolStanding::create($standing);
            }
        });
    }



    protected function blankRow(TournamentPool $pool, string $rosterId): array
    {
        return [
            'tournament_competition_id' => $pool->tournament_competition_id,
            'tournament_pool_id' => $pool->id,
            'roster_id' => $rosterId,

            'position' => 0,

            'played' => 0,
            'won' => 0,
            'lost' => 0,
            'draw' => 0,

            'points' => 0,

            'runs_for' => 0,
            'runs_against' => 0,
            'run_difference' => 0,
        ];
    }
}