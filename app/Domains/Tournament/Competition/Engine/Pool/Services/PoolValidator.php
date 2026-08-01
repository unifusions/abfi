<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Models\TournamentCompetition;
use DomainException;

class PoolValidator
{
    public function validate(TournamentCompetition $competition): void
    {
        $teams = $competition->approvedRosters()->count();

        if ($teams < 8) {
            throw new DomainException(
                'Not enough teams for Pool Play. Use Round Robin instead.'
            );
        } 
        if (
            $competition->tournament->format === TournamentFormatEnum::POOL_PLAY &&
            $competition->pool_count < 4
        ) {
            throw new DomainException(
                'Pool Play requires a minimum of four pools.'
            );
        }
        
        if ($competition->pools()->exists()) {
            throw new DomainException('Pools have already been generated.');
        }

        if (! $competition->registration_closed_at) {
            throw new DomainException('Registration is not closed.');
        }

        if ($competition->approvedRosters()->count() < 2) {
            throw new DomainException('Not enough approved rosters.');
        }

        if ($competition->pool_count < 1) {
            throw new DomainException('Invalid pool count.');
        }
        
    }

}