<?php

namespace  App\Domains\Tournament\Competition\Policies;

use App\Domains\AccessControl\Traits\HandlesAuthorization;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
 
use App\Models\User;


class TournamentCompetitionPolicy
{
    use HandlesAuthorization;

 

    public function progress(User $user, TournamentCompetition $competition): bool
    {
   
        return ($user->hasRole('Federation Admin') || $user->isSuperAdmin());
    }
}