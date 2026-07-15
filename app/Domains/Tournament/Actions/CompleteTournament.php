<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;

class CompleteTournament
{
    public function handle(Tournament $tournament): Tournament
    {
        $tournament->update([

            'status' => TournamentStatus::COMPLETED,

        ]);

        return $tournament->refresh();
    }
}