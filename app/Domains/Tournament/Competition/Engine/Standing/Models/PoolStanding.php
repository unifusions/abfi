<?php

namespace App\Domains\Tournament\Competition\Engine\Standing\Models;

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;


#[Fillable([
    'tournament_pool_id',
    'tournament_competition_id',
    'roster_id',
    'position',
    'played',
    'won',
    'lost',
    'draw',
    'points',
    'runs_for',
    'runs_against',
    'run_difference'
])]
class PoolStanding extends Model
{
    use HasUuids;
    public function pool()
    {
        return $this->belongsTo(TournamentPool::class, 'tournament_pool_id');
    }

    public function roster(){
        return $this->belongsTo(Roster::class, 'roster_id');
    }
}