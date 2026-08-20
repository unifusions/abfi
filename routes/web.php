<?php

use App\Domains\AccessControl\Controllers\RoleController;
use App\Domains\AccessControl\Middleware\Authorize;
use App\Domains\Compliance\Controllers\AuditLogController;
use App\Domains\Compliance\Controllers\ComplianceController;
use App\Domains\Compliance\Controllers\StateController;
use App\Domains\Compliance\Controllers\UserController;
use App\Domains\Organization\Controllers\OrganizationController;
use App\Domains\Tournament\Competition\Engine\Pool\Controllers\PoolController;
use App\Domains\Tournament\Competition\PoolPlay\Controllers\FixtureController;

use App\Domains\Tournament\Controllers\TournamentArchiveController;
use App\Domains\Tournament\Controllers\TournamentPublishController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use App\Domains\Venue\Controllers\VenueSearchController;
use App\Domains\Venue\Controllers\VenueController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\static\HomeController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', HomeController::class)->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    // SIMPLE SEARCH QUERIES

    Route::get('/venue-search', VenueSearchController::class)->name('venue.search');
    Route::post('/venue', [VenueController::class, 'store'])->name('venue.store');

   


    Route::resource('players', \App\Domains\Player\Controllers\PlayerController::class);
    Route::resource('tournaments', \App\Domains\Tournament\Controllers\TournamentController::class);
    Route::patch('tournaments/{tournament}/archive', TournamentArchiveController::class )->name('archive');
    Route::post('tournaments/create-and-publish', [TournamentPublishController::class, 'store'])->name('tournaments.createpublish');
    // Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);


    
});




require __DIR__ . '/settings.php';
require __DIR__ . '/media.php';
require __DIR__ . '/roster.php';
require __DIR__ . '/tournament.php';
require __DIR__ . '/compliance.php';
