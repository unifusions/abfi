<?php

namespace App\Domains\Tournament\Roster\Services;

use App\Domains\Tournament\Roster\Actions\CreateRoster;
use App\Domains\Tournament\Roster\Models\Roster;

class RosterService
{
    public function __construct(
        protected CreateRoster $createRoster
    ) {
    }

    public function create(array $data): Roster
    {

        return $this->createRoster->handle($data);
    }
}