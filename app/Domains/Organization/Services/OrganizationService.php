<?php

namespace App\Domains\Organization\Services;

use App\Domains\Organization\Actions\CreateOrganization;
use App\Domains\Organization\Models\Organization;
class OrganizationService
{

    public function __construct(
        protected CreateOrganization $createOrganization
    ) {

    }

    public function create(array $data): Organization
    {
        return $this->createOrganization->handle($data);
    }
}