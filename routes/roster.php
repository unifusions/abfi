<?php
use App\Domains\Tournament\Roster\Controllers\RosterBuilderController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use App\Domains\Tournament\Roster\Controllers\RosterPlayerController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
   
Route::resource('rosters', RosterController::class);
Route::prefix('rosters')
    ->name('rosters.')
    ->group(
    function(){
        Route::controller(RosterPlayerController::class)->prefix('players')
            ->name('players.')->group(
function (){
    Route::get('/search', 'search')->name('search');
    Route::post('/', 'store')->name('store');
    Route::delete('/{rosterPlayer}', 'destroy')->name('destroy');
}
            );
    }
);
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