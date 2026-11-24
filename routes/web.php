<?php


use App\Domains\Notification\Controllers\TestNotificationController;
use App\Domains\Notification\Notifications\TestNotification;
use App\Domains\QrCode\Controllers\QrcodeVerificationController;


use App\Domains\Tournament\Controllers\TournamentArchiveController;
use App\Domains\Tournament\Controllers\TournamentPublishController;

use App\Domains\Venue\Controllers\VenueSearchController;
use App\Domains\Venue\Controllers\VenueController;
use App\Http\Controllers\DashboardController;


use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\FooterController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\RulesController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');

Route::get('/', HomeController::class)->name('home');
Route::controller(AboutController::class)->group(function () {
    Route::get('/history', 'history')->name('history');
    Route::get('/affiliated-units', 'affiliate')->name('affiliate');
    Route::get('/people', 'people')->name('people');

});

Route::controller(FooterController::class)->group(function (){
Route::get('/constitution', 'constitution')->name('constitution');
Route::get('/certificate-of-registration', 'cor')->name('cor');
Route::get('/financial-audits', 'audit')->name('audit');
});


Route::controller(RulesController::class)->prefix('rules')->name('rules.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/{category}/{slug}', 'show')->name('show');

});

Route::get('/under-construction', function () {
    return view('under-construction');
});

Route::get('/verify/{token}', [QrcodeVerificationController::class, 'verify'])->name('qr.verify');

 
Route::middleware(['auth', 'verified'])->group(function () {

    // Route::get('/test-notification', [TestNotificationController::class, 'index']);
// Route::post('/test-notification', [TestNotificationController::class, 'trigger'])->name('triggerNotification');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');


    // SIMPLE SEARCH QUERIES
    Route::get('/venue-search', VenueSearchController::class)->name('venue.search');
    Route::post('/venue', [VenueController::class, 'store'])->name('venue.store');





    Route::resource('tournaments', \App\Domains\Tournament\Controllers\TournamentController::class);
    Route::patch('tournaments/{tournament}/archive', TournamentArchiveController::class)->name('archive');
    Route::post('tournaments/create-and-publish', [TournamentPublishController::class, 'store'])->name('tournaments.createpublish');

    Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);

});




require __DIR__ . '/settings.php';
require __DIR__ . '/media.php';
require __DIR__ . '/roster.php';
require __DIR__ . '/player.php';
require __DIR__ . '/tournament.php';
require __DIR__ . '/compliance.php';
