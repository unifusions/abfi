<?php

namespace Database\Seeders;

use App\Domains\Compliance\Models\Category;

use Illuminate\Database\Seeder;
use Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [

            [
                'name' => 'Senior',
                'code' => 'SR',
                'minimum_age' => 18,
                'maximum_age' => 99,
            ],
             [
                'name' => 'Juniors',
                'code' => 'U17',
                'minimum_age' => 15,
                'maximum_age' => 17,
            ],
            [
                'name' => 'Sub Juniors',
                'code' => 'U15',
                'minimum_age' => 13,
                'maximum_age' => 15,
            ],

            [
                'name' => 'Kids',
                'code' => 'U13',
                'minimum_age' => 11,
                'maximum_age' => 13,
            ],
            [
            'name' => 'Federation Cup',
            'code' => 'FC',
            'minimum_age' => 0,
            'maximum_age' => 99,        
            ],

            
           

        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['code' => $category['code']],
                [
                    'id' => Str::uuid(),
                    ...$category,
                    'is_active' => true,
                ]
            );
        }
    }
}
