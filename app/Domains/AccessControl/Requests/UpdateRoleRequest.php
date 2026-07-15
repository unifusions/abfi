<?php

namespace App\Domains\AccessControl\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user()->hasPermission('role.update');
    }

    public function rules(): array
    {
        return [
            'code' => [
                'required',
                'string',
                'max:100',
                'uppercase',
                'regex:/^[A-Z0-9_]+$/',
                Rule::unique('roles', 'code')->ignore(
                    $this->route('role')->id
                ),
            ],

            'name' => [
                'required',
                'string',
                'max:150',
            ],

            'description' => [
                'nullable',
                'string',
                'max:500',
            ],

            'permissions' => [
                'nullable',
                'array',
            ],

            'permissions.*' => [
                'uuid',
                Rule::exists('permissions', 'id'),
            ],
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('code')) {
            $this->merge([
                'code' => strtoupper(trim($this->code)),
            ]);
        }
    }
}