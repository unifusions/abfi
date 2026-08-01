<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Actions;

use App\Domains\Tournament\Competition\Engine\Pool\DTOs\PoolGenerationData;
use App\Domains\Tournament\Competition\Engine\Pool\Services\PoolGenerator;
use App\Domains\Tournament\Models\TournamentCompetition;

class GeneratePools
{
    public function __construct(
        protected PoolGenerator $generator,
    ) {}

    public function handle(TournamentCompetition $competition,  PoolGenerationData $data): void
    {
        $this->generator->generate($competition, $data);
    }
}