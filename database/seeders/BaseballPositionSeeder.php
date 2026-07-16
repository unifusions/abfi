<?php

namespace Database\Seeders;

use App\Domains\Compliance\Models\BaseballPosition;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class BaseballPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions = [
            ['code' => 'P',  'name' => 'Pitcher',            'display_order' => 1],
            ['code' => 'C',  'name' => 'Catcher',            'display_order' => 2],
            ['code' => '1B', 'name' => 'First Base',         'display_order' => 3],
            ['code' => '2B', 'name' => 'Second Base',        'display_order' => 4],
            ['code' => '3B', 'name' => 'Third Base',         'display_order' => 5],
            ['code' => 'SS', 'name' => 'Shortstop',          'display_order' => 6],
            ['code' => 'LF', 'name' => 'Left Field',         'display_order' => 7],
            ['code' => 'CF', 'name' => 'Center Field',       'display_order' => 8],
            ['code' => 'RF', 'name' => 'Right Field',        'display_order' => 9],
            ['code' => 'DH', 'name' => 'Designated Hitter',  'display_order' => 10],
        ];

         foreach ($positions as $position) {
            BaseballPosition::updateOrCreate(
                ['code' => $position['code']],
                [
                    'id'            => BaseballPosition::where('code', $position['code'])->value('id') ?? Str::uuid(),
                    'name'          => $position['name'],
                    'display_order' => $position['display_order'],
                ]
            );
        }
    }
}
