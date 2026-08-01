<?php

use App\Domains\Tournament\Roster\Controllers\RosterBuilderController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use App\Domains\Tournament\Roster\Controllers\RosterOfficialController;
use App\Domains\Tournament\Roster\Controllers\RosterPlayerController;
use App\Domains\Tournament\Roster\Controllers\RosterPlayerCreationController;
use App\Domains\Tournament\Roster\Controllers\RosterReviewController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('rosters', RosterController::class);

    Route::prefix('rosters/{roster}')->name('rosters.')
        ->group(function () {

            Route::controller(RosterReviewController::class)->name('review.')->group(
                function () {
                    Route::get('/review', 'review')->name('index');
                    Route::post('/approve', 'approve')->name('approve');
                }
            );

            Route::controller(RosterPlayerController::class)->prefix('players')
                ->name('rosterplayers.')->group(
                    function () {
                        Route::get('/search', 'search')->name('search');
                        Route::post('/store', 'store')->name('store');
                        Route::delete('/{rosterPlayer}', 'destroy')->name('destroy');
                    }
                );

            Route::controller(RosterOfficialController::class)->prefix('officials')->name('rosterofficials.')->group(
                    function () {
                        Route::get('/search', 'search')->name('search');
                        Route::post('/store', 'store')->name('store');
                        Route::delete('/{rosterOfficial}', 'destroy')->name('destroy');
                    }
                );
            Route::get('/builder', [RosterBuilderController::class, 'show'])
                ->name('rosters.builder');

            Route::patch('/builder', [RosterBuilderController::class, 'update'])
                ->name('rosters.builder.update');

            Route::post('/submit', [RosterBuilderController::class, 'submit'])
                ->name('rosters.submit');

            Route::get('/players', [RosterPlayerCreationController::class, 'create'])
                ->name('rosters.players.create');
            Route::post('/players', [RosterPlayerCreationController::class, 'store'])
                ->name('rosters.players.createstore');
        });
});
