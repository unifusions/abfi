<?php

namespace App\Domains\Tournament\Roster\Services;

use App\Domains\Tournament\Roster\Actions\RosterPlayerApproveAction;
use App\Domains\Tournament\Roster\Models\RosterPlayer;

class RosterPlayerService
{

    public function __construct(protected RosterPlayerApproveAction $approveAction)
    {
    }
    public function approvePlayer(RosterPlayer $rosterPlayer)
    {
        return $this->approveAction->handle($rosterPlayer);

    }
}