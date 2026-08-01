<?php

namespace Database\Seeders;

use App\Domains\Compliance\Models\BaseballPosition;
use App\Domains\Organization\Models\Organization;
use App\Domains\Player\Models\Player;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlayerFactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Player::withoutSyncingToSearch(function () {
$runningNumber = 2601;
            $positionIds = BaseballPosition::pluck('id');
            $organizations = Organization::with('state')->get();
            $ageGroups = [
                ['min' => 11, 'max' => 13],
                ['min' => 13, 'max' => 15],
                ['min' => 15, 'max' => 17],
                ['min' => 17, 'max' => 35], // 17 and above (capped at reasonable playing age)
            ];
            foreach ($organizations as $organization) {
                // Determine state prefix (e.g., 'TN')
                $statePrefix = strtoupper($organization->state?->short_code ?? $organization->state_id);

                // Loop through each age group (25 players each = 100 total per org)
                foreach ($ageGroups as $group) {
                    for ($i = 0; $i < 25; $i++) {
                        $gender = fake()->randomElement(['male', 'female']);
                        $genderSuffix = strtoupper(substr($gender, 0, 1)); // 'M' or 'F'

                        // Generate date of birth based on age group
                        $dob = Carbon::now()->subYears(fake()->numberBetween($group['min'], $group['max']))
                            ->subDays(fake()->numberBetween(0, 365))
                            ->format('Y-m-d');

                        // Format player code: TNPLY00001M
                        $codeNumber = str_pad($runningNumber, 5, '0', STR_PAD_LEFT);
                        $playerCode = "{$statePrefix}PLY{$codeNumber}{$genderSuffix}";

                       $player = Player::factory()->create([
                            'player_code' => $playerCode,
                            'organization_id' => $organization->id,
                            'state_id' => $organization->state_id,
                            'gender' => $gender,
                            'dob' => $dob,
                        ]);
$randomCount = rand(1, min(3, count($positionIds)));
                        $selectedPositionUuids = fake()->randomElements($positionIds, $randomCount);
                      $player->positions()->attach($selectedPositionUuids);
                        $runningNumber++;
                    }
                }

            }

        });
    }
}
