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
            ['name' => 'sub_juniors', 'last_number' => 31],
            ['name' => 'juniors', 'last_number' => 31],
            ['name' => 'seniors', 'last_number' => 31],
            ['name' => 'zone', 'last_number' => 31],
            ['name' => 'federation_cup', 'last_number' => 31],
      

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
