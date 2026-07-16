<?php

namespace App\Domains\User\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest{
    public function authorize():bool
    {
        return true;
    }
    public function rules () : array {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string'],
            'organization_id' => ['required'],
            'designation' => ['string'],
            'role_id'=>['uuid',
                Rule::exists('roles', 'id')]
            
        ];
    }
}