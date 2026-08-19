<?php

namespace App\Domains\Tournament\Roster\Services;

use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
use App\Domains\Tournament\Roster\Models\Roster;
use Barryvdh\DomPDF\Facade\Pdf;

class RosterPrintService
{
    public function print(Roster $roster)
    {
      
        $accreditations = TournamentAccreditation::query()
            ->where('roster_id', $roster->id)
            ->where('is_active', true)
            ->orderBy('id')
            ->get();

        $pdf = Pdf::loadView(
            'rosters.roster-sheet',
            [
                'roster' => $roster,
                'accreditations' => $accreditations,
                'tournament' => $roster->competition->tournament
            ]
        );

        $pdf->setPaper('a4', 'portrait');

       
        return $pdf->stream(
            "{$roster->name}.pdf"
        );
    }
}