<?php

namespace App\Domains\AccessControl\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SyncRolePermissionsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user()->hasPermission('role.update');
    }

    public function rules(): array
    {
        return [
            'permissions' => [
                'required',
                'array',
            ],

            'permissions.*' => [
                'uuid',
                Rule::exists('permissions', 'id'),
            ],
        ];
    }
}