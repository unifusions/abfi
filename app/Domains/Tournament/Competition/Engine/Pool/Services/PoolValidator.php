<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Competition\Engine\Pool\DTOs\PoolGenerationData;
use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Models\TournamentCompetition;
use DomainException;

class PoolValidator
{
    public function validate(TournamentCompetition $competition, PoolGenerationData $data): void
    {
        $teams = $competition->approvedRosters()->count();

        if ($teams < 8) {
            throw new DomainException(
                'Not enough teams for Pool Play. Use Round Robin instead.'
            );
        } 
        if (
            $competition->tournament->format === TournamentFormatEnum::POOL_PLAY &&
            $data->poolCount < 4
        ) {
            throw new DomainException(
                'Pool Play requires a minimum of four pools.'
            );
        }
        
        if ($competition->pools()->exists()) {
            throw new DomainException('Pools have already been generated.');
        }

        // if (! $competition->registration_closed_at) {
        //     throw new DomainException('Registration is not closed.');
        // }

        if ($competition->approvedRosters()->count() < 2) {
            throw new DomainException('Not enough approved rosters.');
        }

        if ($data->poolCount < 1) {
            throw new DomainException('Invalid pool count.');
        }
        
    }

}