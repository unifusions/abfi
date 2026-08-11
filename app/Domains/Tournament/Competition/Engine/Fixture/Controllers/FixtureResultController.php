<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Controllers;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Events\FixtureCompletedEvent;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use App\Domains\Tournament\Competition\Engine\Fixture\Requests\UpdateFixtureRequest;
use App\Domains\Tournament\Competition\Engine\Fixture\Services\FixtureResultService;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Http\Controllers\Controller;

class FixtureResultController extends Controller
{
    public function __construct(protected FixtureResultService $service)
    {
    }
    public function resultUpdate(UpdateFixtureRequest $request, Tournament $tournament, TournamentCompetition $competition, TournamentFixture $fixture)
    {

        $data = $request->validated();
        $this->service->update($fixture, $data);

        return back()->with(['success' => "Match {$fixture?->id} Result has been published"]);
    }
}