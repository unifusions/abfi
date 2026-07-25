<?php

namespace App\Domains\Tournament\Roster\Controllers;

use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Resources\OrganizationDropdownResource;
use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Requests\StoreRosterRequest;
use App\Domains\Tournament\Roster\Resources\RosterListResource;
use App\Domains\Tournament\Roster\Services\RosterService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RosterController extends Controller
{
    public function __construct(protected RosterService $service)
    {
    }

    public function index()
    {

        return inertia('roster/roster-index', [
            'rosters' => RosterListResource::collection(Roster::paginate(15)),
            'drafts' => Roster::where('status', RosterStatusEnum::DRAFT->value)->count(),
            'total_rosters' => Roster::count(),
            'approved_rosters' => Roster::where('status', RosterStatusEnum::APPROVED->value)->count()
        ]);
    }
    public function create()
    {

        //    $competition =  TournamentCompetition::query()
//     ->with('tournament.category')
//     ->whereHas('tournament', function ($query) {
//         $query->where('status', TournamentStatus::PUBLISHED);
//     })
//     ->whereDoesntHave('rosters', function ($query) {
//         $query->where('organization_id', auth()->user()->organization_id);
//     })


        // ->get()->map(function ($comp) {
        //     return [
        //         'id' => $comp->id,
        //         't_name' => $comp->tournament->name,   
        //         'c_name' => $comp->competition_type
        //     ];
        // }); 

        $organizationId = auth()->user()->organization_id;

        $tournaments = Tournament::query()
            ->with([
                'competitions' => function ($query) use ($organizationId) {
                    $query->withExists([
                        'rosters as has_roster' => fn($q) =>
                            $q->where('organization_id', $organizationId)
                    ]);
                },
            ])
            ->get()->map(function ($t) {
                return [
                    'value' => $t->id,
                    'label' => $t->name,
                    'competition' => $t->competitions->map((function ($c) {
                        return [
                            'value' => $c->id,
                            'label' => $c->name,
                            'disabled' => $c->has_roster
                            // 'disabled' => true
                        ];
                    }))
                ];
            });

        return inertia('roster/roster-create', [
            'competition' => $tournaments,
            'tournaments' => Tournament::where('status', TournamentStatus::PUBLISHED->value)->get(),
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'can_select_organization' => auth()->user()->hasRole('federation.admin'),
            'default_organization' => auth()->user()->organization_id,
        ]);
    }
    public function store(StoreRosterRequest $request)
    {
        $roster = $this->service->create($request->validated());
        return redirect()->route('rosters.edit', $roster)->with(['success' => 'Roster has been created successfully']);
    }
    public function show(Roster $roster)
    {
        return inertia('roster/roster-show', [
            'roster' => $roster,
            'is_editable' => $roster
        ]);
    }
    public function edit(Roster $roster)
    {
        abort_unless(
            in_array($roster->status, [
                RosterStatusEnum::DRAFT,
                RosterStatusEnum::REJECTED,
            ]),
            403
        );

        if ($roster->status === RosterStatusEnum::REJECTED) {
            $roster->update([
                'status' => RosterStatusEnum::DRAFT,
            ]);
        }


        return inertia('roster/roster-show', [
            'roster' => $roster,
            'is_editable' => $roster
        ]);
    }
    
    public function update(Roster $roster)
    {
    }
    public function destroy(Roster $roster)
    {
    }
}