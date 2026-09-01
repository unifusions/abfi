<?php

namespace App\Domains\Organization\Controllers;

use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use App\Domains\Organization\Requests\StoreOrganizationRequest;
use App\Domains\Organization\Resources\AssociationListResource;
use App\Domains\Organization\Services\OrganizationService;
use App\Domains\Shared\Resources\SelectStateResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class OrganizationController extends Controller
{
    public function __construct(protected OrganizationService $service)
    {

    }

    public function index()
    {
        return inertia('compliance/organization/org-index', [
            'organizations' => AssociationListResource::collection(Organization::paginate(15)),
        ]);
    }

    public function create()
    {
        return inertia('compliance/organization/org-create', [

            'states' => State::all()->map(function ($state) {
                return [
                    'label' => $state->name,
                    'value' => $state->id
                ];
            }),
        ]);
    }
    public function store(StoreOrganizationRequest $request)
    {
        $data = $request->validated();
        $this->service->create($data);
         return redirect()
            ->route('compliance.organizations.index')
            ->with('success', 'Association has been created successfully.');

    }
    public function edit(Organization $organization)
    {
        
        return inertia('compliance/organization/org-edit', [
            'organization' => $organization,
            'states' => SelectStateResource::collection(State::all()),
        ]);
    }
    public function update(Request $request, Organization $organization)
    {
        dd($organization);
    }
    public function destroy()
    {
    }
}