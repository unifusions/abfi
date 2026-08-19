<?php
namespace App\Domains\Tournament\Competition\Accreditation\Controllers;

use App\Domains\Tournament\Competition\Accreditation\Services\AccreditationService;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
 
use App\Http\Controllers\Controller;


class AccreditationController extends Controller
{
public function __construct(protected AccreditationService $service){}
    public function index(Tournament $tournament, TournamentCompetition $competition)
    {
        return inertia(
            'tournament/competition/accreditation/accreditation-index',
            [
                'tournament' => $tournament,
                'competition' => $competition,
                'hasAccreditations' => $competition->accreditations()->count() > 0,
                'accreditations' => $competition->accreditations()->get()->groupBy('roster_id'),
                'rosters' => $competition->approvedRosters()->with(['accreditations', 'organization.state'])->get()
            ]
        );
    }

    public function process(Tournament $tournament, TournamentCompetition $competition){
        $this->service->issueForCompetition($competition);
        return back()->with(['success' => 'ID Cards has been generated successfully']);
    }
}