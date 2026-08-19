<?php 

namespace   App\Domains\Tournament\Competition\Engine\Knockout\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
 
 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class KnockoutGeneratorService {
     public function generate(
        TournamentCompetition $competition,
        Collection $qualified
    ): void {
         $qualified = $qualified->sortBy([
            ['tournament_pool_id', 'asc'],
            ['position', 'asc'],
        ])->values();

        if ($qualified->count() !== 8) {
            throw new InvalidArgumentException('Only 8-team knockout is currently supported.');
        }

        $groups = $qualified
            ->groupBy('tournament_pool_id')
            ->values();

        if ($groups->count() !== 4) {
            throw new InvalidArgumentException('Exactly 4 pools are required.');
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

        foreach ($fixtures as $index => [$home, $away]) {

            TournamentFixture::create([
                'tournament_competition_id' => $competition->id,
                'tournament_pool_id' => null,

                'stage' => FixtureStageEnum::QUARTER_FINAL,
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