<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Compliance\Models\BaseballPosition;
use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Resources\OrganizationDropdownResource;
use App\Domains\Player\Requests\StorePlayerRequest;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Services\RosterPlayerCreationService;
use App\Http\Controllers\Controller;

class RosterPlayerCreationController extends Controller
{

public function __construct(
    protected RosterPlayerCreationService $rosterPlayerCreationService){}
    public function create(Roster $roster)
    {


        $organization_id = $roster->organization->id;
        return response()->json([

            'gender' => $roster->competition->gender(),
            'can_select_organization' => auth()->user()->hasRole('federation.admin'),
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'default_organization' => $organization_id,

            'states' => State::all()->map(function ($state) {
                return [
                    'label' => $state->name,
                    'value' => $state->id,

                ];
            }),
            'baseball_positions' => BaseballPosition::orderBy('display_order', 'asc')->get()->map(function ($position) {
                return [
                    'value' => $position->id,
                    'label' => $position->name . ' [' . $position->code . ']'
                ];
            }),
        ]);
    }
    public function store(Roster $roster, StorePlayerRequest $request)
    {
        $data = $request->validated();
        $data['roster_id'] = $roster->id;
        $rosterPlayer = $this->rosterPlayerCreationService->create($data);
        $message = "Player " . $rosterPlayer->player->player_code . "  has been added to roster";
        return redirect()->back()->with([
            'success' => $message
        ]);
    }
}