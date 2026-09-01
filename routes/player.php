<?php

use App\Domains\Player\Controllers\PlayerBanController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function() {
    Route::resource('players', \App\Domains\Player\Controllers\PlayerController::class);

    Route::prefix('players/{player}')->name('players.')->group(function() {
        Route::patch('/ban', PlayerBanController::class)->name('banPlayer');
    });
});