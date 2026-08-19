<?php

namespace App\Domains\Tournament\Competition\Engine\Knockout\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use Illuminate\Support\Collection;
use RuntimeException;

class KnockoutProgressionService
{
    public function advance(TournamentFixture $fixture): void
    {
        if ($fixture->status !== FixtureStatusEnum::COMPLETED) {
            return;
        }

        if (!$fixture->winner_roster_id) {
            throw new RuntimeException(
                "Completed knockout fixture {$fixture->id} has no winner."
            );
        }

        match ($fixture->stage) {

            FixtureStageEnum::QUARTER_FINAL =>
            $this->generateNextRound(
                $fixture,
                FixtureStageEnum::QUARTER_FINAL,
                FixtureStageEnum::SEMI_FINAL,
                2
            ),

            FixtureStageEnum::SEMI_FINAL =>
            $this->generateNextRound(
                $fixture,
                FixtureStageEnum::SEMI_FINAL,
                FixtureStageEnum::FINAL ,
                1
            ),

            FixtureStageEnum::FINAL => $this->completeCompetition($fixture),

            default => null,
        };
    }


    protected function completeCompetition($fixture)
    {
        $competition = $fixture->competition;
        $final = $fixture;
        $winnerId = $final->winner_roster_id;

        $runnerUpId = $final->home_roster_id === $winnerId
            ? $final->away_roster_id
            : $final->home_roster_id;


        $semiFinals = TournamentFixture::query()
            ->where('tournament_competition_id', $competition->id)
            ->where('fixture_type', FixtureTypeEnum::KNOCKOUT)
            ->where('stage', FixtureStageEnum::SEMI_FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get();
        $thirdPlaceIds = $semiFinals
            ->map(function (TournamentFixture $semiFinal) {
                return $semiFinal->home_roster_id === $semiFinal->winner_roster_id
                    ? $semiFinal->away_roster_id
                    : $semiFinal->home_roster_id;
            })
            ->values();
        $competition->update([
            'phase' => CompetitionPhaseEnum::COMPLETED,
            'winner_roster_id' => $winnerId,
            'runner_up_roster_id' => $runnerUpId,
            'third_place_roster_id' => $thirdPlaceIds->first(),
            'third_place_2_roster_id' => $thirdPlaceIds->get(1),
        ]);
    }
    protected function generateNextRound(
        TournamentFixture $fixture,
        FixtureStageEnum $currentStage,
        FixtureStageEnum $nextStage,
        int $nextMatchCount
    ): void {
        $competitionId = $fixture->tournament_competition_id;

        $currentFixtures = TournamentFixture::query()
            ->where('tournament_competition_id', $competitionId)
            ->where('fixture_type', FixtureTypeEnum::KNOCKOUT)
            ->where('stage', $currentStage)
            ->orderBy('match_number')
            ->get();

        if ($currentFixtures->count() === 0) {
            return;
        }

        if (
            $currentFixtures->contains(
                fn(TournamentFixture $fixture) =>
                $fixture->status !== FixtureStatusEnum::COMPLETED
            )
        ) {
            return;
        }

        if (
            TournamentFixture::query()
                ->where('tournament_competition_id', $competitionId)
                ->where('fixture_type', FixtureTypeEnum::KNOCKOUT)
                ->where('stage', $nextStage)
                ->exists()
        ) {
            return;
        }

        $winners = $currentFixtures
            ->pluck('winner_roster_id')
            ->filter()
            ->values();

        if ($winners->count() !== $nextMatchCount * 2) {
            return;
        }

        for ($i = 0; $i < $nextMatchCount; $i++) {

            TournamentFixture::create([
                'tournament_competition_id' => $competitionId,
                'tournament_pool_id' => null,

                'stage' => $nextStage,
                'fixture_type' => FixtureTypeEnum::KNOCKOUT,
                'status' => FixtureStatusEnum::SCHEDULED,

                'round' => $this->round($nextStage),
                'match_number' => $i + 1,

                'home_roster_id' => $winners[$i * 2],
                'away_roster_id' => $winners[$i * 2 + 1],
            ]);
        }
    }

    protected function round(FixtureStageEnum $stage): int
    {
        return match ($stage) {
            FixtureStageEnum::QUARTER_FINAL => 1,
            FixtureStageEnum::SEMI_FINAL => 2,
            FixtureStageEnum::FINAL => 3,
            default => 0,
        };
    }
}