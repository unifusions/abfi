<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Actions;

use App\Domains\Tournament\Competition\Engine\Fixture\Services\FixtureGenerator;
use App\Domains\Tournament\Models\TournamentCompetition;

class GenerateFixtures {

public function __construct(
    protected FixtureGenerator $generator
){}
public function handle(TournamentCompetition $competition){
    $this->generator->generate($competition);
}
}