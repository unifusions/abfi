<?php

namespace App\Domains\Tournament\Competition\Accreditation\Services;

use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
use App\Domains\Tournament\Competition\Engine\Accreditation\Models\Accreditation;
use App\Domains\Tournament\Competition\Models\TournamentRoster;
use App\Domains\Tournament\Roster\Models\Roster;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Response;

class AccreditationCardService
{
    public function printIndividual(
        Roster $roster,
        TournamentAccreditation $accreditation
    ): Response {
        abort_unless(
            $accreditation->roster_id === $roster->id,
            404
        );

        abort_unless(
            $accreditation->is_active,
            404
        );

        $pdf = Pdf::loadView(
            'tournament.competition.accreditation.cards.individual',
            [
                'accreditation' => $accreditation,
                'snapshot' => $accreditation->snapshot,
            ]
        );

        $pdf->setPaper(
            [0, 0, 242.65, 153.07],
            'landscape'
        );

        return $pdf->stream(
            "{$accreditation->card_number}.pdf"
        );
    }

    public function printAll(
        Roster $roster
    ): Response {
        $accreditations = TournamentAccreditation::query()
            ->where('roster_id', $roster->id)
            ->where('is_active', true)
            ->orderBy('id')
            ->get();

        abort_if($accreditations->isEmpty(), 404);

        $pdf = Pdf::loadView(
            'tournament.competition.accreditation.cards.a4',
            [
                'roster' => $roster,
                'accreditations' => $accreditations,
            ]
        );

        $pdf->setPaper('a4', 'portrait');

        return $pdf->stream(
            "roster-{$roster->id}-id-cards.pdf"
        );
    }
}