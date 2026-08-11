<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Strategies;

use App\Domains\Tournament\Models\TournamentCompetition;
interface FixtureStrategy{
    public function generate(TournamentCompetition $competition):void;
}