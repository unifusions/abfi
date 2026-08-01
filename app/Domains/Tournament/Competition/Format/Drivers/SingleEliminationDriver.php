<?php

namespace   App\Domains\Tournament\Competition\Format\Drivers;

 
use App\Domains\Tournament\Competition\Format\Contracts\TournamentFormatDriver;
use App\Domains\Tournament\Models\TournamentCompetition;

class SingleEliminationDriver implements TournamentFormatDriver
{
    public function initialize(TournamentCompetition $competition): void
    {
        //
    }

    public function onMatchCompleted(TournamentCompetition $competition): void
    {
        //
    }

    public function advance(TournamentCompetition $competition): void
    {
        //
    }

    public function isCompleted(TournamentCompetition $competition): bool
    {
        return false;
    }
}