<?php

namespace App\Domains\Organization\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrganizationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required'],
            'contact_person' => ['required'],
            'phone' => ['required'],
            
            'state_id' => ['required']
        ];
    }
}