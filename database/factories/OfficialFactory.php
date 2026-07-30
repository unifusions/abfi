<?php

namespace Database\Factories;

use App\Domains\Official\Models\Official;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class OfficialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Official::class; // 2. Bind it here
    public function definition(): array
    {
          $gender = $this->faker->randomElement(['male', 'female']);
          $marital = $this->faker->randomElement(['married', 'unmarried','widowed']);
          $type = $this->faker->randomElement(['state', 'tournament','other']);
          $digits = rand(10, 16);
        return [
            'first_name' => $this->faker->firstName($gender),
            'middle_name' => $this->faker->optional(0.5)->firstName($gender),
            'last_name' =>$this->faker->lastName($gender),
                       'father_name' => $this->faker->firstName('male') . ' ' . $this->faker->lastName(),

            'gender' => $gender,
            'dob' => $this->faker->dateTimeBetween('-60 years', '-18 years')->format('Y-m-d'),
               'blood_group' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
               'aadhar_no' => $this->faker->numerify('############'), // 12-digit Indian Aadhar format
            'passport' => $this->faker->optional(0.3)->bothify('?#######'),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->numerify('9#########'),
            'emergency_contact_phone' => $this->faker->numerify('9#########'),
            'address' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'district' => $this->faker->city(),
            'pincode' => $this->faker->numerify('######'),
            'marital_status' => $marital,
            'type' => $type,
            'is_active' => true,
             
            'account_bank_name' => $this->faker->company(),
            'account_number' => $this->faker->numerify(str_repeat('#', $digits)),
            'account_ifsc_code' => $this->faker->bothify('????#######')
        ];
    }
}
