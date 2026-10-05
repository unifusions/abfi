<?php

namespace App\Domains\Tournament\Competition\Engine\Knockout\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;


use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class KnockoutGeneratorService
{
    public function generate(
        TournamentCompetition $competition,
        Collection $qualified
    ): void {


        $count = $qualified->count();
        $qualified = $qualified->sortBy([
            ['tournament_pool_id', 'asc'],
            ['position', 'asc'],
        ])->values();

       
        match ($count) {
            8 => $this->generateEightTeamKnockout($competition, $qualified),
            16 => $this->generateSixteenTeamKnockout($competition, $qualified),
            default => throw new InvalidArgumentException(
                "Unsupported knockout size: {$count} teams."
            ),
        };






    }


    protected function generateEightTeamKnockout(
        TournamentCompetition $competition,
        Collection $qualified
    ): void {
        $groups = $qualified
            ->groupBy('tournament_pool_id')
            ->sortKeys()
            ->values();

        if ($groups->count() !== 4) {
            throw new InvalidArgumentException(
                'Exactly 4 pools are required for an 8-team knockout.'
            );
        }

        foreach ($groups as $group) {
            if ($group->count() !== 2) {
                throw new InvalidArgumentException(
                    'Each pool must have exactly 2 qualifiers.'
                );
            }
        }

        [
            $poolA,
            $poolB,
            $poolC,
            $poolD,
        ] = $groups->all();

        $fixtures = [
            [$poolA[0], $poolB[1]], // A1 vs B2
            [$poolB[0], $poolA[1]], // B1 vs A2
            [$poolC[0], $poolD[1]], // C1 vs D2
            [$poolD[0], $poolC[1]], // D1 vs C2
        ];

        $this->createFixtures(
            $competition,
            $fixtures,
            FixtureStageEnum::QUARTER_FINAL
        );
    }

    protected function generateSixteenTeamKnockout(TournamentCompetition $competition, Collection $qualified)
    {
        

        if ($qualified->count() !== 16) {
            throw new InvalidArgumentException(
                'A 16-team knockout requires exactly 16 qualified teams.'
            );
        }

        $qualified = $qualified
            ->groupBy('tournament_pool_id')
            ->sortKeys()
            ->values();


        $fixtures = [
            [$qualified[0], $qualified[15]],
            [$qualified[7], $qualified[8]],

            [$qualified[3], $qualified[12]],
            [$qualified[4], $qualified[11]],

            [$qualified[1], $qualified[14]],
            [$qualified[6], $qualified[9]],

            [$qualified[2], $qualified[13]],
            [$qualified[5], $qualified[10]],
        ];


        $this->createFixtures(
            $competition,
            $fixtures,
            FixtureStageEnum::ROUND_OF_16
        );
    }
    protected function createFixtures(
        TournamentCompetition $competition,
        array $fixtures,
        FixtureStageEnum $stage
    ): void {
        foreach ($fixtures as $index => [$home, $away]) {
            TournamentFixture::create([
                'tournament_competition_id' => $competition->id,
                'tournament_pool_id' => null,

                'stage' => $stage,
                'status' => FixtureStatusEnum::SCHEDULED,
                'fixture_type' => FixtureTypeEnum::KNOCKOUT,

                'round' => 1,
                'match_number' => $index + 1,

                'home_roster_id' => $home->roster_id,
                'away_roster_id' => $away->roster_id,
            ]);
        }
    }
}