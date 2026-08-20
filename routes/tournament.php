<?php

use App\Domains\Tournament\Competition\Accreditation\Controllers\AccreditationController;
use App\Domains\Tournament\Competition\Certificate\Controllers\CertificateController;
use App\Domains\Tournament\Competition\Controllers\CompetitionController;
use App\Domains\Tournament\Competition\Engine\Fixture\Controllers\FixtureController;
use App\Domains\Tournament\Competition\Engine\Fixture\Controllers\FixtureResultController;
use App\Domains\Tournament\Competition\Engine\Pool\Controllers\PoolController;
use App\Domains\Tournament\Controllers\TournamentCategoryController;

Route::middleware(['auth', 'verified'])->group(function () {

    

    Route::prefix('tournaments/{tournament}')->name('tournaments.')->group(function () {
        Route::controller(CompetitionController::class)->prefix('competition/{competition}')
            ->name('competition.')->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/builder', 'builder')->name('builder');
                Route::get('/fixtures', 'fixtures')->name('fixtures');
                Route::get('/standings', 'standings')->name('standings');
                Route::get('/certificates', 'certificates')->name('certificates');
                Route::get('/certificates/{roster}', 'certificatesForRoster')->name('certificatesForRoster');
                Route::patch('/close-registratrion', 'closeRegistration')->name('closeRegistration');
            });
    });

    Route::prefix('tournaments/{tournament}/competition/{competition}/accreditation')->name('tournaments.competition.accreditation.')->group(function () {
        Route::controller(AccreditationController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('/process', 'process')->name('processAccreditations');
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

        Route::controller(FixtureResultController::class)->group(function () {
            Route::put('{fixture}/results', 'resultUpdate')->name('resultUpdate');
        });

    });


    Route::prefix('tournaments/{tournament}/competition/{competition}/certificates')->name('tournaments.competition.certificates.')->group(function () {
        Route::controller(CertificateController::class)->group(function () {

            Route::post('/generate-all', 'generateAllCertificates')->name('generateAllCertificates');
            Route::post('/generate', 'generateParticipantCertificates')->name('generateParticipantCertificates');
            Route::get('{certificate}/preview', 'preview')->name('preview');
            Route::get('{certificate}/download', 'downloadSingle')->name('downloadSingle');
            Route::get('{certificate}/email', 'emailCertificate')->name('emailCertificate');

        });



    });





});