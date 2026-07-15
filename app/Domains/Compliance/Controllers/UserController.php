<?php

namespace App\Domains\Compliance\Controllers;

use App\Domains\AccessControl\Models\Role;
use App\Domains\Organization\Models\Organization;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
 
        return inertia('compliance/access-control/user-index', [
            'roles' => Role::all(),
              'organizations' => Organization::all()
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
    public function store(Request $request)
    {
        //
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
