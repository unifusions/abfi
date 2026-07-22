<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Media\Controllers\MediaController;

Route::middleware(['auth'])
    ->prefix('media')
    ->name('media.')
    ->group(function () {

        Route::post('/upload', [MediaController::class, 'upload'])
            ->name('upload');

        Route::delete('/{media}', [MediaController::class, 'destroy'])
            ->name('destroy');

    });