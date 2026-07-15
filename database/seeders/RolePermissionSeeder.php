<?php

namespace Database\Seeders;

use App\Domains\AccessControl\Enums\RoleEnum;
use App\Domains\AccessControl\Models\Permission;
use App\Domains\AccessControl\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $this->grantAllPermissionsToFederationAdmin();

    }

      private function grantAllPermissionsToFederationAdmin(): void
    {
        $role = Role::where(
            'code',
            RoleEnum::FEDERATION_ADMIN->value
        )->first();

        if (! $role) {
            return;
        }

        $role->permissions()->sync(
            Permission::pluck('id')
        );
    }
}
