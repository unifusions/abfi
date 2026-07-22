<?php

namespace App\Domains\AccessControl\Providers;

use App\Domains\Player\Models\Player;
use App\Domains\Roster\Models\Roster;
use App\Domains\Official\Models\Official;
use App\Domains\Tournament\Models\Tournament;

use App\Domains\AccessControl\Policies\PlayerPolicy;
use App\Domains\AccessControl\Policies\RosterPolicy;
use App\Domains\AccessControl\Policies\OfficialPolicy;
use App\Domains\AccessControl\Policies\TournamentPolicy;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AccessControlPolicyProvider extends ServiceProvider
{
    protected $policies = [
        Player::class     => PlayerPolicy::class,
        // Roster::class     => RosterPolicy::class,
        // Official::class   => OfficialPolicy::class,
        // Tournament::class => TournamentPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}