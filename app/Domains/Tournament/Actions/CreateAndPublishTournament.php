<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;
use Illuminate\Support\Str;

class CreateAndPublishTournament
{
    public function handle(array $attributes): Tournament
    {
        $attributes['slug'] = Str::slug($attributes['name']);

        $attributes['published_at'] =  now();
        $attributes['status'] = TournamentStatus::PUBLISHED;


        return Tournament::create($attributes);
    }
}