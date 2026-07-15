<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('states')->insert([
            ['name' => 'Andhra Pradesh', 'short_code' => 'AP', 'region' => 'South'],
            ['name' => 'Arunachal Pradesh', 'short_code' => 'AR', 'region' => 'North East'],
            ['name' => 'Assam', 'short_code' => 'AS', 'region' => 'North East'],
            ['name' => 'Bihar', 'short_code' => 'BR', 'region' => 'East'],
            ['name' => 'Chhattisgarh', 'short_code' => 'CG', 'region' => 'Central'],
            ['name' => 'Goa', 'short_code' => 'GA', 'region' => 'West'],
            ['name' => 'Gujarat', 'short_code' => 'GJ', 'region' => 'West'],
            ['name' => 'Haryana', 'short_code' => 'HR', 'region' => 'North'],
            ['name' => 'Himachal Pradesh', 'short_code' => 'HP', 'region' => 'North'],
            ['name' => 'Jharkhand', 'short_code' => 'JH', 'region' => 'East'],
            ['name' => 'Karnataka', 'short_code' => 'KA', 'region' => 'South'],
            ['name' => 'Kerala', 'short_code' => 'KL', 'region' => 'South'],
            ['name' => 'Madhya Pradesh', 'short_code' => 'MP', 'region' => 'Central'],
            ['name' => 'Maharashtra', 'short_code' => 'MH', 'region' => 'West'],
            ['name' => 'Manipur', 'short_code' => 'MN', 'region' => 'North East'],
            ['name' => 'Meghalaya', 'short_code' => 'ML', 'region' => 'North East'],
            ['name' => 'Mizoram', 'short_code' => 'MZ', 'region' => 'North East'],
            ['name' => 'Nagaland', 'short_code' => 'NL', 'region' => 'North East'],
            ['name' => 'Odisha', 'short_code' => 'OD', 'region' => 'East'],
            ['name' => 'Punjab', 'short_code' => 'PB', 'region' => 'North'],
            ['name' => 'Rajasthan', 'short_code' => 'RJ', 'region' => 'North'],
            ['name' => 'Sikkim', 'short_code' => 'SK', 'region' => 'North East'],
            ['name' => 'Tamil Nadu', 'short_code' => 'TN', 'region' => 'South'],
            ['name' => 'Telangana', 'short_code' => 'TS', 'region' => 'South'],
            ['name' => 'Tripura', 'short_code' => 'TR', 'region' => 'North East'],
            ['name' => 'Uttar Pradesh', 'short_code' => 'UP', 'region' => 'North'],
            ['name' => 'Uttarakhand', 'short_code' => 'UK', 'region' => 'North'],
            ['name' => 'West Bengal', 'short_code' => 'WB', 'region' => 'East'],

            ['name' => 'Andaman & Nicobar Islands', 'short_code' => 'AN', 'region' => 'South'],
            ['name' => 'Chandigarh', 'short_code' => 'CH', 'region' => 'North'],
            ['name' => 'Daman & Diu', 'short_code' => 'DH', 'region' => 'West'],
            ['name' => 'Delhi', 'short_code' => 'DL', 'region' => 'North'],
            ['name' => 'Jammu & Kashmir', 'short_code' => 'JK', 'region' => 'North'],
            ['name' => 'Ladakh', 'short_code' => 'LA', 'region' => 'North'],
            ['name' => 'Lakshadweep', 'short_code' => 'LD', 'region' => 'South'],
            ['name' => 'Puducherry', 'short_code' => 'PY', 'region' => 'South'],
        ]);

    }
}
