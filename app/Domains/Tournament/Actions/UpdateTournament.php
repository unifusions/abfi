<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Tournament\Models\Tournament;

class UpdateTournament
{
    public function handle(
        Tournament $tournament,
        array $attributes
    ): Tournament {

        $tournament->update($attributes);

        return $tournament->refresh();
    }
}