<?php

namespace App\Http\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Official\Models\Official;
use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return inertia('dashboard', [
            'states_data' => State::select('short_code')->withCount([
                'players',
                'rosters'
            ])->get()->keyBy('short_code'),
            'stats' => [
                [
                    'label' => 'Total Players',
                    'value' => Player::count(),

                ],
                [
                    'label' => 'Total Officials',
                    'value' => Official::count(),

                ],
                [
                    'label' => 'Total Tournaments',
                    'value' => Tournament::where('status', '!=', 'draft')->get()->count(),

                ],
                [
                    'label' => "Total Rosters",
                    'value' => Roster::where('status', RosterStatusEnum::APPROVED)->get()->count()
                ]
            ],
            'events' =>  Tournament::where('status', '!=', 'draft')->get()->map(function ($event) {
 
            return [
                        'id'=> $event->id,
                        'name' => $event->name,
                        'venue' => $event->venue->name,
                        'month' => $event->starts_at->format('M'),
                        'day' => $event->starts_at->format('d')
                ];
            })


        ]);
    }
}
