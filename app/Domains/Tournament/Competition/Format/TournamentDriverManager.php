<?php

namespace App\Domains\Tournament\Competition\Format;
 
use App\Domains\Tournament\Competition\Drivers\DoubleEliminationDriver;
use App\Domains\Tournament\Competition\Drivers\PoolPlayDriver;
 
use App\Domains\Tournament\Competition\Drivers\RoundRobinDriver;
use App\Domains\Tournament\Competition\Format\Contracts\TournamentFormatDriver;
use App\Domains\Tournament\Competition\Format\Drivers\SingleEliminationDriver;
use App\Domains\Tournament\Competition\Format\Drivers\SingleEliminationFormatDriver;
use App\Domains\Tournament\Competition\Format\Exceptions\UnsupportedTournamentFormatException;
use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Models\TournamentCompetition;

class TournamentDriverManager
{
    public function driver(
        TournamentCompetition $competition
    ): TournamentFormatDriver
    {
        return match ($competition->tournament->competition_format) {

            TournamentFormatEnum::POOL_PLAY =>
                app(PoolPlayDriver::class),

                TournamentFormatEnum::ROUND_ROBIN =>
                app(RoundRobinDriver::class),

                TournamentFormatEnum::SINGLE_ELIMINATION =>
                app(SingleEliminationDriver::class),

                TournamentFormatEnum::DOUBLE_ELIMINATION =>
                app(DoubleEliminationDriver::class),

            default =>
                throw new UnsupportedTournamentFormatException(),
        };
    }
}