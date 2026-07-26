<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Roster\Models\RosterPlayer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RosterPlayerController extends Controller
{
    public function __construct() {}

    public function index() {}
    public function search() {}
    public function store(Request $request)
    {

        $rosterPlayer = RosterPlayer::create([
            'roster_id' => $request->roster,
            'player_id' => $request->player_id,
        ]);

        return back()->with([
            'success' => 'Player added to the roster'
        ]);

        // dd($request->input());
    }

    public function destroy(RosterPlayer $rosterPlayer)
    {
        $rosterPlayer->delete();
        return back()->with([
            'success' => 'Player removed from the roster'
        ]); 
    }
}
