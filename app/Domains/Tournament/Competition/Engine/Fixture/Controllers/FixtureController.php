<?php

namespace  App\Domains\Tournament\Competition\Engine\Fixture\Controllers;
use App\Domains\Tournament\Competition\Engine\Fixture\Actions\GenerateFixtures;
use App\Domains\Tournament\Competition\Engine\Fixture\Actions\LockFixtures;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FixtureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('tournament/competition/fixture-index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return inertia('tournament/tournament-create');
    }
public function generate(
Tournament $tournament,
        TournamentCompetition $competition,
        GenerateFixtures $action,
    ) {
        $action->handle($competition);

        return back()->with(
            'success',
            'Fixtures generated successfully.'
        );
    }

     public function lock(Tournament $tournament, TournamentCompetition $competition, LockFixtures $action){
    //  sleep(10);   
     $action->handle($competition);

        return back()->with([
            'success' => 'Match Fixtures has been locked'
        ]);
     }
}
