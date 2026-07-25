<?php
use App\Domains\Tournament\Roster\Controllers\RosterBuilderController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
   
Route::resource('rosters', RosterController::class);

Route::prefix('rosters/{roster}')
    ->group(function () {
        Route::get('/builder', [RosterBuilderController::class, 'show'])
            ->name('rosters.builder');

        Route::patch('/builder', [RosterBuilderController::class, 'update'])
            ->name('rosters.builder.update');

        Route::post('/submit', [RosterBuilderController::class, 'submit'])
            ->name('rosters.submit');
    });
    
});