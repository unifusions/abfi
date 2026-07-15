<?php

namespace App\Domains\AccessControl\Controllers;

use App\Domains\AccessControl\Requests\SyncRolePermissionsRequest;
use App\Http\Controllers\Controller;
use App\Domains\AccessControl\DTOs\RoleData;
use App\Domains\AccessControl\Models\Permission;
use App\Domains\AccessControl\Models\Role;
use App\Domains\AccessControl\Requests\StoreRoleRequest;
use App\Domains\AccessControl\Requests\UpdateRoleRequest;
use App\Domains\AccessControl\Services\RoleService;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function __construct(
        private readonly RoleService $service
    ) {}

    public function index(): Response
    {
        
        return Inertia::render('compliance/access-control/role-index', [
            'roles' => Role::query()
                ->withCount('users')
                ->with('permissions:id')
                ->orderBy('name')
                ->get(),

            'permissions' => Permission::query()
                ->orderBy('module')
                ->orderBy('name')
                ->get()->groupBy('module'),
        ]);
    }

    public function show(Role $role){
            return inertia('compliance/access-control/role-show', );
    }

    public function store(StoreRoleRequest $request): RedirectResponse
    {
        $this->service->create(
            RoleData::fromStoreRequest($request)
        );

        return back()->with(
            'success',
            'Role created successfully.'
        );
    }

    public function update(
        UpdateRoleRequest $request,
        Role $role
    ): RedirectResponse {
 
        
        $this->service->update(
            $role,
            RoleData::fromUpdateRequest($request)
        );

        return back()->with(
            'success',
            'Role updated successfully.'
        );
    }


    public function syncPermissions(
        SyncRolePermissionsRequest $request,
        Role $role
    ): RedirectResponse {

        $this->service->syncPermissions(
            $role,
            $request->validated('permissions', [])
        );

        return back()->with(
            'success',
            'Role permissions updated successfully.'
        );
    }
    
    public function destroy(Role $role): RedirectResponse
    {
        $this->service->delete($role);

        return back()->with(
            'success',
            'Role deleted successfully.'
        );
    }
}