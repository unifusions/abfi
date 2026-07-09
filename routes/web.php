<?php

use App\Domains\Tournament\Competition\Drivers\PoolPlay\Controllers\FixtureController;
use App\Domains\Tournament\Competition\Drivers\PoolPlay\Controllers\PoolController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('players', \App\Domains\Player\Controllers\PlayerController::class);
    Route::resource('tournaments', \App\Domains\Tournament\Controllers\TournamentController::class);
    Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);

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
                        function(){
                            Route::get('/', 'index')->name('index');
                        }
                    );

            }
        );
});




require __DIR__ . '/settings.php';
