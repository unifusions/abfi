<?php

namespace App\Domains\Organization\Actions;

use App\Domains\Organization\Models\Organization;

class CreateOrganization {
    public function handle (array $attributes): Organization {
        
    return Organization::create($attributes);
    }
}