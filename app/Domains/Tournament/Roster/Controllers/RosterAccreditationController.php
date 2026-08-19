<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
 use App\Domains\Tournament\Competition\Accreditation\Services\AccreditationCardService;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;

class RosterAccreditationController extends Controller
{

    public function __construct(
        protected AccreditationCardService $cardService
    ) {
    }

    public function printIndividual(Roster $roster, TournamentAccreditation $accreditation)
    {
        return $this->cardService->printIndividual(
            $roster,
            $accreditation
        );
    }
    public function print(Roster $roster)
    {
        return $this->cardService->printAll($roster);
    }
}