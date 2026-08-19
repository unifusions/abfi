<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Strategies;

use App\Domains\Tournament\Competition\Models\TournamentCompetition;

 
interface FixtureStrategy{
    public function generate(TournamentCompetition $competition):void;
}