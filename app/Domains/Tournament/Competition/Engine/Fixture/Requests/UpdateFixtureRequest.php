<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFixtureRequest extends FormRequest{
    public function authorize(){
        return true;
    }

    public function rules () {
        return [
        // 'winner_roster_id' => ['required'],
        'home_score' => ['required'],
        'away_score' => ['required'],
        'remarks' => ['nullable']
        ];
    }
}