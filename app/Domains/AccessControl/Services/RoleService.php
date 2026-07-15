<?php

namespace App\Domains\AccessControl\Services;

use App\Domains\AccessControl\DTOs\RoleData;
use App\Domains\AccessControl\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Throwable;

class RoleService
{
    /**
     * Create a new role.
     */
    public function create(RoleData $data): Role
    {
        return DB::transaction(function () use ($data) {

            $role = Role::create([
                'code' => $data->code,
                'name' => $data->name,
                'description' => $data->description,
                'is_system' => $data->isSystem,
            ]);

            $role->permissions()->sync($data->permissions);

            return $role->load('permissions');

        });
    }

    /**
     * Update an existing role.
     */
    public function update(Role $role, RoleData $data): Role
    {
        if ($role->is_system) {
            throw ValidationException::withMessages([
                'role' => 'System roles cannot be modified.',
            ]);
        }

        return DB::transaction(function () use ($role, $data) {

            $role->update([
                'code' => $data->code,
                'name' => $data->name,
                'description' => $data->description,
            ]);


            $role->permissions()->sync($data->permissions);


            return $role->load('permissions');

        });
    }

    /**
     * Delete a role.
     */
    public function delete(Role $role): void
    {
        if ($role->is_system) {
            throw ValidationException::withMessages([
                'role' => 'System roles cannot be deleted.',
            ]);
        }

        DB::transaction(function () use ($role) {

            $role->permissions()->detach();

            $role->users()->detach();

            $role->delete();

        });
    }

    /**
     * Assign permissions to a role.
     */
    public function syncPermissions(Role $role, array $permissionIds): Role
    {
        if ($role->is_system) {
            throw ValidationException::withMessages([
                'role' => 'System role permissions cannot be modified.',
            ]);
        }

        DB::transaction(function () use ($role, $permissionIds) {

            $role->permissions()->sync($permissionIds);

        });

        return $role->load('permissions');
    }
}