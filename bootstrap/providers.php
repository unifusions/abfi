<?php

use App\Domains\AccessControl\Providers\AccessControlPolicyProvider;
use App\Domains\AccessControl\Providers\AccessControlServiceProvider;
use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    // AccessControlServiceProvider::class,
    AccessControlPolicyProvider::class
];
