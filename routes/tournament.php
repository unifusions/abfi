<?php

use App\Domains\Tournament\Competition\Controllers\CompetitionController;
use App\Domains\Tournament\Competition\Engine\Pool\Controllers\PoolController;
use App\Domains\Tournament\Controllers\TournamentCategoryController;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/tournament-categories', [TournamentCategoryController::class, 'index']);

    Route::prefix('tournaments/{tournament}')->name('tournaments.')->group(function () {
        Route::controller(CompetitionController::class)->prefix('competition/{competition}')
            ->name('competition.')->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/builder', 'builder')->name('builder');

            });
    });
    Route::prefix('tournaments/{tournament}/competition/{competition}/pools')->name('tournaments.competition.pools.')->group(function () {
        Route::controller(PoolController::class)->group(function () {
            Route::post('/generate', 'generate')->name('generate');
            Route::post('/{pool}/add-roster/{roster}', 'add')->name('addRoster');
            Route::post('/{pool}/remove-roster/{roster}', 'remove')->name('removeRoster');
            Route::post('/{pool}/move-roster/{roster}', 'move')->name('moveRoster');
            Route::post('/{pool}/lock', 'lock')->name('lock');
            Route::delete('/{pool}/destroy', 'destroy')->name('destroy');
        });
    });



});