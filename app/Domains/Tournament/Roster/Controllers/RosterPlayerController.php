<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Models\RosterPlayer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RosterPlayerController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
    }
    public function search()
    {
    }
    public function store(  Request $request, Roster $roster)
    {

 
        if ($roster->players->count() >= $roster->competition->tournament->category->maximum_players)
            return back()->with([
                'error' => "Player cannot be added furthur"
            ]);
        $rosterPlayer = RosterPlayer::create([
            'roster_id' => $roster->id,
            'player_id' => $request->player_id,

        ]);

        $message = "Player " . $rosterPlayer->player->player_code . "  has been added to roster";

        return back()->with([
            'success' => $message
        ]);

        // dd($request->input());
    }

    public function destroy(Roster $roster, RosterPlayer $rosterPlayer)
    {
        $rosterPlayer->delete();
        $message = "Player " . $rosterPlayer->player->player_code . "  has been removed from roster";
        return back()->with([
            'success' => $message
        ]);
    }
}
