<?php

use App\Domains\AccessControl\Controllers\RoleController;
use App\Domains\Compliance\Controllers\AuditLogController;
use App\Domains\Compliance\Controllers\ComplianceController;
use App\Domains\Compliance\Controllers\StateController;
use App\Domains\Organization\Controllers\OrganizationController;
use App\Domains\Tournament\Controllers\TournamentCategoryController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('rbac:role,admin')->group(function () {
        Route::resource('officials', \App\Domains\Official\Controllers\OfficialController::class);
        Route::get('compliance', [ComplianceController::class, 'index'])->name('compliance');

        Route::prefix('compliance')->name('compliance.')->group(
            function () {
                Route::get('/tournament-categories', [TournamentCategoryController::class, 'index'])->name('categories');
                Route::resource('roles', RoleController::class);
                Route::resource('organizations', OrganizationController::class);
                Route::patch(
                    'compliance/roles/{role}/permissions',
                    [RoleController::class, 'syncPermissions']
                )->name('roles.permissions.sync');
                Route::controller(\App\Domains\User\Controllers\UserController::class)->prefix('users')->name('users.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                        Route::post('/', 'store')->name('store');
                        Route::get('/create', 'create')->name('create');
                        Route::get('/{user}/edit', 'edit')->name('edit');
                    }
                );

                Route::controller(StateController::class)->prefix('states')->name('states.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                    }
                );
                Route::controller(AuditLogController::class)->prefix('audit')->name('logs.')->group(
                    function () {
                        Route::get('/', 'index')->name('index');
                    }
                );
            }
        );
    });
});

