<?php

namespace Database\Seeders;

use App\Domains\AccessControl\Enums\RoleEnum;
use App\Domains\AccessControl\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        foreach (RoleEnum::cases() as $role) {

            Role::updateOrCreate(
                [
                    'code' => Str::lower($role->value),
                ],
                [
                    'name' => Str::headline(
                        str_replace('_', ' ', $role->value)
                    ),

                    'description' => null,

                    // 'is_system' =>false,
                'is_system' =>  $role->value === 'Admin' ? true : false,
                ]
            );

        }
    }
}
    