<?php

namespace App\Domains\Player\Controllers;

use App\Domains\Compliance\Models\BaseballPosition;
use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Resources\OrganizationDropdownResource;
use App\Domains\Player\Models\Player;
use App\Domains\Player\Requests\StorePlayerRequest;
use App\Domains\Player\Resources\PlayerListResource;
use App\Domains\Player\Resources\PlayerResource;
use App\Domains\Player\Services\PlayerService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct(
        protected PlayerService $service
    ) {
    }
    public function index(Request $request)
    {
        $search = $request->input('search');
        $selectedAssociation = $request->input('association');
        $players = Player::search($search ?? '')
        ->when($selectedAssociation, function ($query, $selectedAssociation){
            return $query->where('organization_id', $selectedAssociation)->visibleTo(auth()->user());
        })
                ->orderByDesc('created_at')->paginate(15);
        $associations = Organization:: orderBy('name')->get();
        return inertia('player/player-index', [
            'registered_players' => Player::count(),
            'm_players' => Player::where('gender', 'male')->count(),
            'f_players' => Player::where('gender', 'female')->count(),
            'players' => PlayerListResource::collection($players),
            'filters' => $request->only(['search', 'associations']),
            'associations' =>  $associations->map(function ($ass) {
                return ['label' => $ass->name, 'value' => $ass->id];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    { 
        $this->authorize('create', Player::class);
        return inertia('player/player-create', [
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'can_select_organization' => auth()->user()->hasRole('federation.admin'),
                    'default_organization' => auth()->user()->organization_id,

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


    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlayerRequest $request)
    {

        $player = $this->service->create($request->validated());
        return redirect()->route('players.show', $player)->with(['success' => 'New player has been added to the registry']);

    }

    /**
     * Display the specified resource.
     */
    public function show(Player $player)
    {
        
        return inertia('player/player-view', ['player' => new PlayerResource($player)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
