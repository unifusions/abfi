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
            ['name' => 'player_code',            'last_number' => 0],
            ['name' => 'official_code',             'last_number' => 0],
           
        ];

        foreach ($sequences as $sequence){
            CodeSequence::updateOrCreate(
                ['name' => $sequence['name']],
                ['name' => $sequence['name'],
                'last_number' => $sequence['last_number']]
            );
            
        }
    }
}
