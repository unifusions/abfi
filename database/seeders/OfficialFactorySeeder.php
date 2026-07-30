<?php

namespace Database\Seeders;

use App\Domains\Official\Models\Official;
use App\Domains\Organization\Models\Organization;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficialFactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Official::withoutSyncingToSearch(function () {
            $runningNumber = 1;

            $organizations = Organization::with('state')->get();

            foreach ($organizations as $organization) {
                // Determine state prefix (e.g., 'TN')
                $statePrefix = strtoupper($organization->state?->short_code ?? $organization->state_id);

                // Loop through each age group (25 players each = 100 total per org)

                for ($i = 0; $i < 250; $i++) {
                    $gender = fake()->randomElement(['male', 'female']);
                    $genderSuffix = strtoupper(substr($gender, 0, 1)); // 'M' or 'F'

                    // Generate date of birth based on age group


                    // Format player code: TNPLY00001M
                    $codeNumber = str_pad($runningNumber, 5, '0', STR_PAD_LEFT);
                    $playerCode = "{$statePrefix}OFF{$codeNumber}{$genderSuffix}";

                    $player = Official::factory()->create([
                        'official_code' => $playerCode,
                        'organization_id' => $organization->id,
                        'state_id' => $organization->state_id,
                        'gender' => $gender,

                    ]);

                    $runningNumber++;
                }


            }

        });
    }
}
