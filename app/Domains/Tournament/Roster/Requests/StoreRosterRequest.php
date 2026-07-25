<?php

namespace App\Domains\Tournament\Roster\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class StoreRosterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'tournament_competition_id' => ['required', 'uuid', Rule::exists('tournament_competitions', 'id')],
               'organization_id' => ['required', 'uuid', Rule::exists('organizations', 'id')],
            'name' => ['required']
        ];
    }
    public function messages(): array
    {
        return [];
    }
}
