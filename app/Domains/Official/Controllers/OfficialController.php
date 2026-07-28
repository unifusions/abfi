<?php

namespace App\Domains\Official\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Official\Models\Official;
use App\Domains\Official\Requests\StoreOfficialRequest;
use App\Domains\Official\Resources\OfficialListResource;
use App\Domains\Official\Services\OfficialService;
use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Resources\OrganizationDropdownResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OfficialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(protected OfficialService $service){}
    public function index(Request $request)
    { 

     $search = $request->input('search');
        $selectedAssociation = $request->input('association');
                $associations = Organization::orderBy('name')->get();

                $officials = Official::search($search ?? '')
            ->when($selectedAssociation, function ($query, $selectedAssociation) {
                return $query->where('organization_id', $selectedAssociation)
                        ;
            })
            ->orderByDesc('created_at')->paginate(15);

        return inertia('official/official-index', [
            'states' => State::all(),
            'total_officials' => Official::count(),
            'officials' => OfficialListResource::collection($officials),
            'organizations' =>  $associations->map(function ($ass) {
                return ['label' => $ass->name, 'value' => $ass->id];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //   $this->authorize('create', Official::class);
        return inertia('official/official-create',
        [
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'can_select_organization' => auth()->user()->hasRole('federation.admin'),
                    'default_organization' => auth()->user()->organization_id,

            'states' => State::all()->map(function ($state) {
                return [
                    'label' => $state->name,
                    'value' => $state->id,

                ];
            }),
          
        ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOfficialRequest $request)
    {

    $official = $this->service->create($request->validated());
    $message = " Official {$official?->id} has been created";
      return redirect()->route('officials.index')->with(['success' => $message]); 
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
     return inertia('official/official-view');
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
