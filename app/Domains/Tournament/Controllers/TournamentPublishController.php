<?php

namespace App\Domains\Tournament\Controllers;

use App\Domains\Tournament\Requests\StoreTournamentRequest;
use App\Http\Controllers\Controller;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Services\TournamentService;
use Illuminate\Http\RedirectResponse;

class TournamentPublishController extends Controller
{
    public function __construct(
        protected TournamentService $service
    ) {
    }

    public function store(StoreTournamentRequest $request)
    {
        return $request;
        $data = $request->validated();
        $tournament = $this->service->create($data);
        $this->service->publish($tournament);
          return redirect()
            ->route('tournaments.show', $tournament)
            ->with('success', 'Tournament published successfully.');
    }
    public function publish(
        Tournament $tournament
    ): RedirectResponse {

        $this->service->publish($tournament);

        return redirect()
            ->route('tournaments.show', $tournament)
            ->with('success', 'Tournament published successfully.');
    }
}