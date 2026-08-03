<?php

namespace App\Http\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Player\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __invoke(){
        return inertia('dashboard', [
            'states_data' => State::select( 'short_code')->withCount([
                        'players', 'rosters'
            ])->get()->keyBy('short_code'),
          
        ]);
    }
}
