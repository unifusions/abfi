<?php

namespace App\Domains\Tournament\Roster\Actions;

use App\Domains\Tournament\Roster\Models\RosterPlayer;

class RosterPlayerApproveAction
{
    public function handle(RosterPlayer $rosterPlayer)
    {
        $rosterPlayer->is_approved = true;
        $rosterPlayer->is_request_resubmission = false;
        $rosterPlayer->save();
        return $rosterPlayer;
    }
}