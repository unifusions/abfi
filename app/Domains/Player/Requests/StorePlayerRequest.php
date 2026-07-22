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
            
            'first_name' => ['required','string', 'max:255'],
            'middle_name' => [ 'nullable'],
            'last_name' => ['required','string', 'max:255'],
            'father_name' => ['required','string'],
            'player_positions' => ['required','array'],
            'player_positions.*' => [
                'uuid',
                Rule::exists('baseball_positions', 'id')
            ],
            'organization_id' => ['required', 'uuid', Rule::exists('organizations', 'id')],
            'gender' => ['required','string'],
            'dob' => ['required', 'date'],
            'blood_group' => ['required', 'string'],
            'aadhar_no' => ['required','unique:players', 'string'],
            'passport' => ['nullable', 'string'],
            'email' => ['required','email', Rule::unique('players', 'email')],
            'phone' => ['required'],
            'emergency_contact_phone' => ['required'],
            'state_id' => ['required', 'nullable'],
            'address' => ['required'],
            'city' => ['required'],
            
            'pincode' => ['required', 'string'],
            'media_id' => ['string']
            
        ];
    }

    public function messages(): array
    {
        return [
            'organization_id.required' => 'Player should be in any one of the Association.',
            'state_id.required' => 'State field is required',
            'blood_group.required' => 'Bloog Group field is required', 
            'aadhar_no.required' => 'Valid Aadhar Number is required',
        ];
    }


}