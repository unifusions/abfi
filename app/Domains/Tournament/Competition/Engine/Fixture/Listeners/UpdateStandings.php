<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Listeners;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Events\FixtureCompletedEvent;
use App\Domains\Tournament\Competition\Engine\Knockout\Services\KnockoutProgressionService;
use App\Domains\Tournament\Competition\Engine\Pool\Services\PoolCompletion;
use App\Domains\Tournament\Competition\Engine\Pool\Services\Qualification;
use App\Domains\Tournament\Competition\Engine\Standing\Services\StandingsService;
use App\Domains\Tournament\Competition\Services\CompetitionCompletion;

class UpdateStandings
{
    public function __construct(
        protected StandingsService $service,
        protected PoolCompletion $poolCompletion,
        protected CompetitionCompletion $competitionCompletion,
        protected Qualification $qualification,
        protected KnockoutProgressionService $knockoutProgression
    ) {
    }

    public function handle(FixtureCompletedEvent $event): void
    {

     $fixture = $event->fixture;

        if ($fixture->fixture_type === FixtureTypeEnum::KNOCKOUT) {
            $this->knockoutProgression->advance($fixture);

            return;
        }

        if ($fixture->fixture_type !== FixtureTypeEnum::POOL) {
            return;
        }
        
        $pool = $event->fixture->pool;
        $this->service->calculatePool($pool);
        if (!$this->poolCompletion->isCompleted($pool)) {
            return;
        }

        $competition = $pool->competition;
 
        if (!$this->competitionCompletion->isPoolStageCompleted($competition)) {
            return;
        }

        $this->qualification->qualify($competition);
    }
}