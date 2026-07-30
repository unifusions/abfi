<?php

use App\Domains\AccessControl\Controllers\RoleController;
use App\Domains\AccessControl\Middleware\Authorize;
use App\Domains\Compliance\Controllers\AuditLogController;
use App\Domains\Compliance\Controllers\ComplianceController;
use App\Domains\Compliance\Controllers\StateController;
use App\Domains\Compliance\Controllers\UserController;
use App\Domains\Organization\Controllers\OrganizationController;
use App\Domains\Tournament\Competition\PoolPlay\Controllers\FixtureController;
use App\Domains\Tournament\Competition\PoolPlay\Controllers\PoolController;
use App\Domains\Tournament\Controllers\TournamentPublishController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use App\Domains\Venue\Controllers\VenueSearchController;
use App\Domains\Venue\Controllers\VenueController;
use App\Http\Controllers\static\HomeController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', HomeController::class)->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // SIMPLE SEARCH QUERIES

    Route::get('/venue-search', VenueSearchController::class)->name('venue.search');
    Route::post('/venue', [VenueController::class, 'store'])->name('venue.store');
 
    Route::middleware('rbac:role, Federation Admin')->group(function () {
        Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);
        Route::get('compliance', [ComplianceController::class, 'index'])->name('compliance');

        Route::prefix('compliance')->name('compliance.')->group(
            function () {
                Route::resource('roles', RoleController::class);
                Route::resource('organizations', OrganizationController::class);
                Route::patch(
                    'compliance/roles/{role}/permissions',
                    [RoleController::class, 'syncPermissions']
                )->name('roles.permissions.sync');
                Route::controller(\App\Domains\User\Controllers\UserController::class)->prefix('users')->name('users.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                        Route::post('/', 'store')->name('store');
                        Route::get('/create', 'create')->name('create');
                    }
                );

                Route::controller(StateController::class)->prefix('states')->name('states.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                    }
                );
                Route::controller(AuditLogController::class)->prefix('audit')->name('logs.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                    }
                );
            }
        );
    });



    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('players', \App\Domains\Player\Controllers\PlayerController::class);
    Route::resource('tournaments', \App\Domains\Tournament\Controllers\TournamentController::class);
    Route::post('tournaments/create-and-publish', [TournamentPublishController::class, 'store'])->name('tournaments.createpublish');
    // Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);


    Route::prefix('tournaments/{tournament}/competition')->name('tournaments.competition.')->
        group(
            function () {
                Route::controller(PoolController::class)
                    ->prefix('pools')
                    ->name('pools.')
                    ->group(function () {

                        Route::get('/', 'index')->name('index');



                    });

                Route::controller(FixtureController::class)->prefix('fixtures')->name('fixtures.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                    }
                );

            }
        );
});




require __DIR__ . '/settings.php';
require __DIR__ .'/media.php';
require __DIR__ .'/roster.php';
require __DIR__ .'/tournament.php';
