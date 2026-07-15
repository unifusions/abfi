<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;

class PublishTournament
{
    public function handle(Tournament $tournament): Tournament
    {
        $tournament->update([

            'status' => TournamentStatus::PUBLISHED,
            'published_at' => now(),

        ]);

        return $tournament->refresh();
    }
}