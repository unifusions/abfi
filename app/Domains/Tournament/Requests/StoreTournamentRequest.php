<?php

namespace App\Domains\Tournament\Requests;

use App\Domains\Compliance\Models\Category;
use App\Domains\Tournament\Enums\CompetitionFormat;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTournamentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [



            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'season' => ['nullable', 'string', 'max:50'],
            'organization_id' => ['required'],
            'venue_id' => ['required'],
            'competition_format' => ['required'],
            'starts_at' => ['required', 'date'],
            'ends_at' => ['required', 'date', 'after_or_equal:starts_at'],
            'registration_open_at' => ['nullable', 'date'],
            'registration_close_at' => [
                'nullable',
                'date',
                'after_or_equal:registration_open_at',
            ],
            'category_id' => ['required', 'uuid', Rule::exists('categories' ,'id')],
            'competition_type' => ['array'],
            'action' => [
                'required',
                Rule::in(['draft', 'publish']),
            ],

        ];
    }
}