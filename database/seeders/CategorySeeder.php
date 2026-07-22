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
                'name' => 'Little League',
                'code' => 'LL',
                'minimum_age' => 5,
                'maximum_age' => 12,
            ],

            [
                'name' => 'Sub Juniors',
                'code' => 'U16',
                'minimum_age' => 14,
                'maximum_age' => 16,
            ],
            [
                'name' => 'Juniors',
                'code' => 'U18',
                'minimum_age' => 16,
                'maximum_age' => 18,
            ],
            [
                'name' => 'Senior',
                'code' => 'SR',
                'minimum_age' => 18,
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
