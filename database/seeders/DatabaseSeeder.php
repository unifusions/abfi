<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Password;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'admin',
            'email' => 'siyam@unifusions.com',
            'is_super_admin' => true,
        'password' =>'password'
        ], 
    );
        $this->call([
            AccessControlSeeder::class,
            BaseballPositionSeeder::class,
            CategorySeeder::class,
            StateSeeder::class,
         OrganizationSeeder::class,
            CodeSequenceSeeder::class,
        ]);

    }
}
