<?php


namespace App\Domains\Player\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePlayerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'player_code' => ['string', 'max:255'],
            'first_name' => ['string', 'max:255'],
            'middle_name' => ['required', 'string'],
            'last_name' => ['string'],
            'father_name' => ['string'],
            'player_positions' => ['array'],
            'player_positions.*' => [
                'uuid',
                Rule::exists('baseball_positions', 'id')
            ],
            'organization_id' => ['uuid', Rule::exists('organizations', 'id')],
            'gender' => ['string'],
            'dob' => ['date'],
            'bloodgroup' => ['string'],
            'aadhar_no' => ['unique', 'string'],
            'passport' => ['string'],
            'email' => ['string'],
            'phone' => ['string'],
            'emergency_contact_phone' => [],
            'state_id' => ['nullable'],
            'address' => ['string'],
            'city' => ['string'],
            'district' => ['string'],
            'pincode' => ['string'],
            
        ];
    }

}