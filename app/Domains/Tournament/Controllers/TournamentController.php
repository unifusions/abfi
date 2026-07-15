<?php

namespace App\Domains\Tournament\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Requests\StoreTournamentRequest;
use App\Domains\Tournament\Requests\UpdateTournamentRequest;
use App\Domains\Tournament\Resources\ActiveTournamentResource;
use App\Domains\Tournament\Services\TournamentService;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Domains\Venue\Models\Venue;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(
        protected TournamentService $service
    ) {
    }

    public function index()
    {

        $activeNow = Tournament::where('status', TournamentStatus::PUBLISHED)->count();

        $registrationOpen = Tournament::where('registration_status', 'open')->count();
        $activeTournament = Tournament::latest()->first();
        // $totalTeams = Team::count();
$activeTournament = new ActiveTournamentResource($activeTournament) ;
        $completedMTD = Tournament::where('status', 'completed')
            ->whereMonth('completed_at', Carbon::now()->month)
            ->whereYear('completed_at', Carbon::now()->year)
            ->count();


        return inertia('tournament/tournament-index', [

            'tournaments' => Tournament::latest()->paginate(15),
            'activeTournament' => $activeTournament,
            'activeNow' => $activeNow,
            'registrationOpen' => $registrationOpen,
            // 'totalTeams' => $totalTeams,
            'completedMTD' => $completedMTD,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('tournament/tournament-create', [
            'states' => State::all(),
            'venues' => Venue::all(),
            'organizations' => Organization::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTournamentRequest $request)
    {

   
 

        $data = $request->validated();
        if ($data['action'] === 'publish') {

            $tournament = $this->service->createAndPublish($data);
           return redirect()
            ->route('tournaments.show', $tournament)
            ->with('success', 'Tournament published successfully.');
        } else {

            $tournament = $this->service->create($data);
              return redirect()
            ->back()
            ->with('success', 'Tournament created successfully and yet to be published.');

        }
      
    }

    /**
     * Display the specified resource.
     */
    public function show(Tournament $tournament)
    {
        return inertia('tournament/tournament-show', ['tournament' => $tournament]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tournament $tournament)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTournamentRequest $request, Tournament $tournament)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tournament $tournament)
    {
        //
    }
}
