<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;

class RosterBuilderController extends Controller
{
    public function show(Roster $roster)
    {
        return inertia('roster/roster-builder', [
            'roster' => $roster
        ]);
    }
    public function save()
    {
    }
    public function submit()
    {
    }
}