<?php

use App\Domains\Tournament\Controllers\TournamentCategoryController;

 Route::middleware(['auth','verified'])->group(function() { 

 Route::get('/tournament-categories', [TournamentCategoryController::class, 'index']);
});
