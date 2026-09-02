<?php

use App\Domains\AccessControl\Controllers\RoleController;
use App\Domains\AccessControl\Middleware\Authorize;
use App\Domains\Compliance\Controllers\AuditLogController;
use App\Domains\Compliance\Controllers\ComplianceController;
use App\Domains\Compliance\Controllers\StateController;
use App\Domains\Compliance\Controllers\UserController;
use App\Domains\Organization\Controllers\OrganizationController;
use App\Domains\QrCode\Controllers\QrcodeVerificationController;
use App\Domains\Tournament\Competition\Engine\Pool\Controllers\PoolController;
use App\Domains\Tournament\Competition\PoolPlay\Controllers\FixtureController;

use App\Domains\Tournament\Controllers\TournamentArchiveController;
use App\Domains\Tournament\Controllers\TournamentPublishController;
use App\Domains\Tournament\Roster\Controllers\RosterController;
use App\Domains\Venue\Controllers\VenueSearchController;
use App\Domains\Venue\Controllers\VenueController;
use App\Http\Controllers\DashboardController;
 
 
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', HomeController::class)->name('home');
Route::controller(AboutController::class)->group(function () {
    Route::get('/history', 'history')->name('history');
    Route::get('/affiliates', 'affiliate')->name('affiliate');

});
Route::get('/verify/{token}', [QrcodeVerificationController::class, 'verify'])->name('qr.verify');

Route::get('/getUuid', function () {
    return Str::uuid();
});
Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    // SIMPLE SEARCH QUERIES
  
    Route::get('/venue-search', VenueSearchController::class)->name('venue.search');
    Route::post('/venue', [VenueController::class, 'store'])->name('venue.store');




  
    Route::resource('tournaments', \App\Domains\Tournament\Controllers\TournamentController::class);
    Route::patch('tournaments/{tournament}/archive', TournamentArchiveController::class)->name('archive');
    Route::post('tournaments/create-and-publish', [TournamentPublishController::class, 'store'])->name('tournaments.createpublish');
    // Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);



});




require __DIR__ . '/settings.php';
require __DIR__ . '/media.php';
require __DIR__ . '/roster.php';
require __DIR__ . '/player.php';
require __DIR__ . '/tournament.php';
require __DIR__ . '/compliance.php';
