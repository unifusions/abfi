<?php

namespace App\Domains\Tournament\Competition\Drivers;

use App\Domains\Tournament\Competition\Format\Contracts\TournamentFormatDriver;
use App\Domains\Tournament\Models\TournamentCompetition;

class PoolPlayDriver implements TournamentFormatDriver
{
    public function __construct(
        // protected PoolGenerator $poolGenerator,
        // protected FixtureGenerator $fixtureGenerator,
        // protected StandingService $standingService,
        // protected QualificationService $qualificationService,
        // protected KnockoutGenerator $knockoutGenerator,
    ) {}

    public function initialize(TournamentCompetition $competition): void
    {
        // $this->poolGenerator->generate($competition);

        // $this->fixtureGenerator->generate($competition);
    }

    public function onMatchCompleted(TournamentCompetition $competition): void
    {
        // $this->standingService->calculate($competition);
    }

    public function advance(TournamentCompetition $competition): void
    {
        // $this->qualificationService->qualify($competition);

        // $this->knockoutGenerator->generate($competition);
    }

    public function isCompleted(TournamentCompetition $competition): bool
    {
        // return false;
    }
}