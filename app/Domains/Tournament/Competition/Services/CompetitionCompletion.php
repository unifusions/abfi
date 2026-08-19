<?php 
namespace App\Domains\Tournament\Competition\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
 

class CompetitionCompletion{
     public function isPoolStageCompleted(TournamentCompetition $competition): bool
    {
        // return !$competition->pools()
        //     ->whereHas('fixtures', function ($query) {

        //         $query->where('stage', FixtureStageEnum::POOL)
        //         ->where('status', '!=', FixtureStatusEnum::COMPLETED);
        //     })
        //     ->exists();

       
            return !$competition->fixtures()
            ->where('fixture_type', FixtureTypeEnum::POOL)
            ->where('status', '!=', FixtureStatusEnum::COMPLETED)
            ->exists();
    }
}