<?php

namespace Database\Factories;

 
use App\Domains\Player\Models\Player;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\Illuminate\Database\Eloquent\Model>
 */
class PlayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Player::class; // 2. Bind it here
    public function definition(): array
    {
        $gender = $this->faker->randomElement(['male', 'female']);
        $genderCode = $gender === 'male' ? 'M' : 'F'; 
        return [
           'first_name' => $this->faker->firstName($gender),
            'middle_name' => $this->faker->optional(0.5)->firstName($gender),
            'last_name' => $this->faker->lastName(),
            'father_name' => $this->faker->firstName('male') . ' ' . $this->faker->lastName(),
            'gender' => $gender,
           
            'blood_group' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            'aadhar_no' => $this->faker->unique()->numerify('############'), // 12-digit Indian Aadhar format
            'passport' => $this->faker->optional(0.3)->bothify('?#######'),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->numerify('9#########'),
            'emergency_contact_phone' => $this->faker->numerify('9#########'),
            'address' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'district' => $this->faker->city(),
            'pincode' => $this->faker->numerify('######'),
            'is_active' => true,
            'is_verified' => $this->faker->boolean(80),
            'verified_at' => now(),
        ];
    }
}
