<?php

namespace Database\Seeders;

use App\Domains\AccessControl\Enums\PermissionEnum;
use App\Domains\AccessControl\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (PermissionEnum::cases() as $permission) {

            Permission::Create(
             
                [
                       'code' => $permission->value,
                    'name' => Str::headline(
                        str_replace('.', ' ', $permission->value)
                    ),

                    'module' => Str::headline(
                        explode('.', $permission->value)[0]
                    ),

                    'description' => $permission->value,
                ]
            );

        }
    }
}
