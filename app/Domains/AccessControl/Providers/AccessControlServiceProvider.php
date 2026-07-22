<?php

namespace App\Domains\AccessControl\Providers;

// use App\Domains\AccessControl\Scopes\OfficialScope;
// use App\Domains\AccessControl\Scopes\OrganizationScope;
use App\Domains\AccessControl\Scopes\PlayerScope;
// use App\Domains\AccessControl\Scopes\RosterScope;
// use App\Domains\AccessControl\Scopes\TournamentScope;
 
use App\Domains\AccessControl\Services\ScopeManagerService;
 
use App\Domains\AccessControl\Services\ScopeRegistryService;
use App\Domains\Official\Models\Official;
use App\Domains\Organization\Models\Organization;
use App\Domains\Player\Models\Player;
use App\Domains\Roster\Models\Roster;
use App\Domains\Tournament\Models\Tournament;
use Illuminate\Support\ServiceProvider;

class AccessControlServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(ScopeRegistryService::class);

        $this->app->singleton(ScopeManagerService::class, function ($app) {
            return new ScopeManagerService(
                $app->make(ScopeRegistryService::class)
            );
        });
    }

    public function boot(): void
    {
       
        $registry = $this->app->make(ScopeRegistryService::class);

        $registry->register(
            Player::class,
            PlayerScope::class
        );

        // $registry->register(
        //     Roster::class,
        //     RosterScope::class
        // );

        // $registry->register(
        //     Official::class,
        //     OfficialScope::class
        // );

        // $registry->register(
        //     Organization::class,
        //     OrganizationScope::class
        // );

        // $registry->register(
        //     Tournament::class,
        //     TournamentScope::class
        // );
    }
}