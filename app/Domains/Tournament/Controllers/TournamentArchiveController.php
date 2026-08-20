<?php

namespace App\Domains\Tournament\Controllers;

use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;
use App\Http\Controllers\Controller;
class TournamentArchiveController extends Controller{
    public function __invoke(Tournament $tournament){
        $tournament->update(['status'=>TournamentStatus::ARCHIVED]);
return back()->with(['success' => 'Tournament has been archived']);
    }
}