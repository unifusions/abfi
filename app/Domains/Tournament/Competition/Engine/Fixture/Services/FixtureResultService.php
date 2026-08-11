<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Events\FixtureCompletedEvent;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use DB;
class FixtureResultService
{

    public function update(TournamentFixture $fixture, $data)
    {
        return DB::transaction(
            function () use ($fixture, $data) {
                $fixture->home_score = $data['home_score'];
                $fixture->away_score = $data['away_score'];
                $fixture->remarks = $data['remarks'] ?? '';
                $fixture->status = FixtureStatusEnum::COMPLETED;

                if ($data['home_score'] > $data['away_score']) {
                    $fixture->winner_roster_id = $fixture->home_roster_id;

                } else {
                    $fixture->winner_roster_id = $fixture->away_roster_id;

                }

              
                $fixture->save();
                event(new FixtureCompletedEvent($fixture));
                $fixture->fresh();
            }
        );
    }
}