<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Models\RosterOfficial;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RosterOfficialController extends Controller
{
    public function store(Roster $roster, Request $request)
    {
        if ($roster->officials->count() >= $roster->competition->tournament->category->maximum_officials)
            return back()->with([
                'error' => "Official cannot be added furthur. Only 2 officials is allowed per roster"
            ]);

        $rosterOfficial = RosterOfficial::create([
            'roster_id' => $roster->id,
            'official_id' => $request->official_id
        ]);
        $message = "Official " . $rosterOfficial->official->official_code . "  has been added to roster";
        return back()->with([
            'success' => $message
        ]);
    }

    public function destroy(Roster $roster, RosterOfficial $rosterOfficial)
    {
        $rosterOfficial->delete();
        $message = "Official " . $rosterOfficial->official->player_code . "  has been removed from roster";
        return back()->with([
            'success' => $message
        ]);
    }
}
