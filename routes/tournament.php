<?php

use App\Domains\Tournament\Competition\Controllers\CompetitionController;
use App\Domains\Tournament\Competition\Engine\Fixture\Controllers\FixtureController;
use App\Domains\Tournament\Competition\Engine\Fixture\Controllers\FixtureResultController;
use App\Domains\Tournament\Competition\Engine\Pool\Controllers\PoolController;
use App\Domains\Tournament\Controllers\TournamentCategoryController;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/tournament-categories', [TournamentCategoryController::class, 'index']);

    Route::prefix('tournaments/{tournament}')->name('tournaments.')->group(function () {
        Route::controller(CompetitionController::class)->prefix('competition/{competition}')
            ->name('competition.')->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/builder', 'builder')->name('builder');
                Route::get('/fixtures', 'fixtures')->name('fixtures');
                Route::get('/standings', 'standings')->name('standings');

            });
    });
    Route::prefix('tournaments/{tournament}/competition/{competition}/pools')->name('tournaments.competition.pools.')->group(function () {
        Route::controller(PoolController::class)->group(function () {
            Route::post('/generate', 'generate')->name('generate');
            Route::post('/{tournamentPool}/add-roster/{roster}', 'add')->name('addRoster');
            Route::post('/{pool}/remove-roster/{roster}', 'remove')->name('removeRoster');
            Route::post('/{pool}/move-roster/{roster}', 'move')->name('moveRoster');
            Route::post('/lock', 'lock')->name('lock');
            Route::delete('/{pool}/destroy', 'destroy')->name('destroy');
        });

       
    });

    Route::prefix('tournaments/{tournament}/competition/{competition}/fixtures')->name('tournaments.competition.fixtures.')->group(function () {
        Route::controller(FixtureController::class)->group(function () {
            Route::post('/generate', 'generate')->name('generate');
            Route::post('/lock', 'lock')->name('lock');
            
        });

        Route::controller(FixtureResultController::class)->group(function(){
            Route::put('{fixture}/results' , 'resultUpdate')->name('resultUpdate');
        });

       
    });



});