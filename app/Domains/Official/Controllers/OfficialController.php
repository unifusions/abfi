<?php

namespace App\Domains\Official\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\Official\Models\Official;
use App\Domains\Official\Requests\StoreOfficialRequest;
use App\Domains\Official\Requests\UpdateOfficialRequest;
use App\Domains\Official\Resources\OfficialListResource;
use App\Domains\Official\Services\OfficialService;
use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Resources\OrganizationDropdownResource;
use App\Domains\Shared\Resources\SelectStateResource;
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
        $user = auth()->user();
        $canSelect =$user->hasRole('admin') || $user->hasRole('staff') || $user->isSuperAdmin();
        //   $this->authorize('create', Official::class);
        return inertia('official/official-create',
        [
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'can_select_organization' => $canSelect,
                    'default_organization' => auth()->user()->organization_id,

            'states' => SelectStateResource::collection(State::all()),
          
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
    public function show(Official $official)
    {
     return inertia('official/official-view');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Official $official)
    {
        $user = auth()->user();
        $canSelect =$user->hasRole('admin') || $user->hasRole('staff') || $user->isSuperAdmin();
 
        return inertia('official/official-edit', [
            'organizations' => OrganizationDropdownResource::collection(Organization::orderBy('name')->get()),
            'can_select_organization' => $canSelect,
            'official' => $official,
            'states' => SelectStateResource::collection(State::all()),

            'profile_photo' => [
                'id' => $official->profile_media?->id,
                'url' => $official->getMediaUrl(MediaCollectionEnum::PROFILE),
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOfficialRequest $request, Official $official)
    {
        $official->update($request->validated());
        return redirect()->route('officials.index')->with([
            'success' => "Official {$official->official_code} has been updated successfully"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
