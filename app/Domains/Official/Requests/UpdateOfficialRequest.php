<?php

namespace App\Domains\Official\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateOfficialRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules(): array
    {
        return [

            'first_name' => ['required', 'string', 'max:255'],
            'middle_name' => ['nullable'],
            'last_name' => ['required', 'string', 'max:255'],
            'father_name' => ['required', 'string'],
            
           

         

            'email' => ['required', 'email', Rule::unique('players', 'email')],
            'phone' => ['required'],
            'emergency_contact_phone' => ['required'],

            'state_id' => ['required', 'nullable'],
            'address' => ['required'],
            'city' => ['required'],
            'pincode' => ['required', 'string'],

            'media_id' => ['string'],
            'marital_status' => ['required'],
            'type' => ['required'],

            'account_bank_name' => ['required'],
            'account_number' => ['required'],
            'account_ifsc_code' => ['required']

        ];
    }

     public function messages(): array
    {
        return [
            
            'state_id.required' => 'State field is required',
           
            'account_bank_name' => 'Bank name is required',
            'account_number' => 'Account Number is required',
            'account_ifsc_code' => 'Bank IFSC Code is required'
        ];
    }
}