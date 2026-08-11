<?php

namespace App\Domains\Tournament\Competition\Engine\Fixture\Models;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'tournament_competition_id',
    'tournament_pool_id',
    'round',
    'match_number',
    'home_roster_id',
    'away_roster_id',
    'status',
    'winner_roster_id',
    'home_score',
    'away_score',
    'remarks',
    'stage', 'status', 'fixture_type',
])]
class TournamentFixture extends Model
{
    use HasUuids;
    protected $casts = [
        'scheduled_at' => 'datetime',
        'status' => FixtureStatusEnum::class,
        'stage' => FixtureStageEnum::class,
        'fixture_type' => FixtureTypeEnum::class
    ];

    public function competition()
    {
        return $this->belongsTo(TournamentCompetition::class);
    }

    public function pool()
    {
        return $this->belongsTo(TournamentPool::class, 'tournament_pool_id');
    }

    public function awayRoster()
    {
        return $this->belongsTo(Roster::class, 'away_roster_id');
    }

    public function homeRoster()
    {
        return $this->belongsTo(Roster::class, 'home_roster_id');

    }

    public function winnerRoster()
    {
        return $this->belongsTo(Roster::class, 'winner_roster_id');
    }

}