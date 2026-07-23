<?php

namespace App\Domains\User\Controllers;

use App\Domains\AccessControl\Models\Role;
use App\Domains\Shared\Resources\SelectOrganizationResource;
use App\Domains\Shared\Resources\SelectRoleResource;
use App\Domains\User\Requests\StoreUserRequest;
use App\Domains\Organization\Models\Organization;
use App\Domains\User\Resources\UserListResource;
use App\Domains\User\Services\UserService;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct(protected UserService $service)
    {
    }
    public function index()
    {

        $users = User::where(['is_super_admin' => false])->paginate(15);

        return inertia('compliance/access-control/user-index', [
            'users' => UserListResource::collection($users),
            'roles' => SelectRoleResource::collection(Role::all()),
            'organizations' => SelectOrganizationResource::collection(Organization::all()) 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('compliance/access-control/user-create', [
            'roles' => Role::query()
                ->withCount('users')
                ->with('permissions:id,name')
                ->orderBy('name')
                ->get(),

            'organizations' => Organization::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $user = $this->service->create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

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
