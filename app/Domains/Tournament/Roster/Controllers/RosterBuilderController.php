<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Actions\BuilderRosterAction;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Resources\RosterPlayerResource;
use App\Http\Controllers\Controller;

class RosterBuilderController extends Controller
{
    public function __construct(
        protected BuilderRosterAction $builderRosterAction
    ){}
    public function show(Roster $roster)
    {
       
       return inertia('roster/roster-builder', $this->builderRosterAction->handle($roster) );
    }
    public function save()
    {
    }
    public function submit()
    {
    }
}