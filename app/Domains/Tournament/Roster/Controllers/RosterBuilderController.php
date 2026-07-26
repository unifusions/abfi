<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Player\Models\Player;
use App\Domains\Player\Resources\PlayerListforRosterResource;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;

class RosterBuilderController extends Controller
{
    public function show(Roster $roster)
    {
        $last_date = $roster->competition->tournament->registration_close_at;
        return inertia('roster/roster-builder', [
            'roster' => $roster,
            'players' => PlayerListforRosterResource::collection(Player::all()),
            'roster_players' => $roster->players,
            'category' => $roster->competition->tournament->category,
            'last_date' => $last_date->format('M d, Y g:i A')
        ]);
    }
    public function save()
    {
    }
    public function submit()
    {
    }
}