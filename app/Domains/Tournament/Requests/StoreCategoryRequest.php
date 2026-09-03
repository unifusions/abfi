<?php 

namespace App\Domains\Tournament\Requests;

class StoreCategoryRequest extends StoreTournamentRequest{
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'code' => ['required', 'string'],
            'minimum_age' => ['required', 'integer', 'min:0'],
            'maximum_age' => ['required', 'integer', 'min:1'],
            'minimum_players' => ['required', 'integer', 'min:1'],
            'maximum_players' => ['required', 'integer', 'min:1'],
            'maximum_officials' => ['required', 'integer', 'min:1'],
           
        ];          

    }
}

