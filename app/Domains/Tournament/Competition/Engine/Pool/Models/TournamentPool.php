<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Models;

use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use App\Domains\Tournament\Competition\Engine\Standing\Models\PoolStanding;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable('name', 'tournament_competition_id', 'code', 'display_order')]
class TournamentPool extends Model
{
    use HasUuids;
    public function poolRosters()
    {
        return $this->hasMany(TournamentPoolRoster::class);
    }

    public function competition() {
        return $this->belongsTo(TournamentCompetition::class, 'tournament_competition_id');
    }
    public function rosters()
    {
        return $this->hasManyThrough(
            Roster::class,
            TournamentPoolRoster::class,
            'tournament_pool_id', // Foreign key on TournamentPoolRoster
            'id',                 // Foreign key on Roster
            'id',                 // Local key on TournamentPool
            'roster_id'           // Local key on TournamentPoolRoster
        );
    }

     public function fixtures() {
        return $this->hasMany(TournamentFixture::class, 'tournament_pool_id');
    }

    public function standings(){
        return $this->hasMany(PoolStanding::class, 'tournament_pool_id');
    }
}