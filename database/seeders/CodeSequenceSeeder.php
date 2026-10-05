<?php

namespace Database\Seeders;

use App\Domains\Compliance\Models\CodeSequence;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CodeSequenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sequences = [
            ['name' => 'player_code', 'last_number' => 8000],
            ['name' => 'official_code', 'last_number' => 750],
            ['name' => 'u13_tournament_code', 'last_number' => 31],
            ['name' => 'u15_tournament_code', 'last_number' => 31],
            ['name' => 'u17_tournament_code', 'last_number' => 31],
            ['name' => 'sr_tournament_code', 'last_number' => 31],
            ['name' => 'fc_tournament_code', 'last_number' => 31],
            ['name' => 'zc_tournament_code', 'last_number' => 31],

        ];

        foreach ($sequences as $sequence) {
            CodeSequence::updateOrCreate(
                ['name' => $sequence['name']],
                [
                    'name' => $sequence['name'],
                    'last_number' => $sequence['last_number']
                ]
            );

        }
    }
}
