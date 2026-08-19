<?php

namespace App\Domains\Tournament\Competition\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use Illuminate\Support\Collection;

class CompetitionResultService
{
    public function results(TournamentCompetition $competition) : Collection
    {
        $competition->load([
        'rosters',
        'fixtures' => fn ($query) =>
            $query->where('status', FixtureStatusEnum::COMPLETED),
    ]);

    $results = [];

    foreach ($competition->rosters as $roster) {
        $results[$roster->id] = [
            'roster' => $roster,
            'played' => 0,
            'won' => 0,
            'lost' => 0,
            'draw' => 0,
        ];
    }

    foreach ($competition->fixtures as $fixture) {

        if (
            !$fixture->home_roster_id ||
            !$fixture->away_roster_id ||
            !$fixture->winner_roster_id
        ) {
            continue;
        }

        $home = $fixture->home_roster_id;
        $away = $fixture->away_roster_id;
        $winner = $fixture->winner_roster_id;

        $results[$home]['played']++;
        $results[$away]['played']++;
 // Draw
    if (!$winner) {
        $results[$home]['draw']++;
        $results[$away]['draw']++;

        continue;
    }
        if ($winner === $home) {
            $results[$home]['won']++;
            $results[$away]['lost']++;
        } else {
            $results[$away]['won']++;
            $results[$home]['lost']++;
        }
    }

    return collect($results)
        ->values()
        ->sortBy([
            ['won', 'desc'],
            ['lost', 'asc'],
        ])
        ->values();
    }

}