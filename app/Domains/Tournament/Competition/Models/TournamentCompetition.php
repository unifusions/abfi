<?php

namespace App\Domains\Tournament\Competition\Models;

use App\Domains\Shared\Enums\GenderEnum;
use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use App\Domains\Tournament\Competition\Engine\Standing\Models\PoolStanding;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Competition\Policies\TournamentCompetitionPolicy;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Roster\Models\Roster;


use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[UsePolicy(TournamentCompetitionPolicy::class)]

class TournamentCompetition extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $fillable = [
        'tournament_id',
        'name',

        'is_active',
        'competition_type',
        'pool_count',
        'pools_generated_at',
        'pools_locked_at',
        'fixture_generated_at',
        'fixture_locked_at',
        'phase',
        'winner_roster_id',
        'runner_up_roster_id',
        'third_place_roster_id',
        'third_place_2_roster_id',
    ];

    protected $casts = [
        'phase' => CompetitionPhaseEnum::class,
        'is_active' => 'boolean',
    ];

    public function gender()
    {
        return match ($this->competition_type) {
            'boys', 'men' => 'male',
            'girls', 'women' => 'female',
            default => throw new \RuntimeException('Invalid competition type.'),
        };
    }

    public function tournament()
    {
        return $this->belongsTo(Tournament::class);
    }

    public function pools(): HasMany
    {
        return $this->hasMany(TournamentPool::class, 'tournament_competition_id');
    }

    public function standings()
    {
        return $this->hasMany(PoolStanding::class, 'tournament_competition_id');
    }

    public function accreditations()
    {
        return $this->hasMany(TournamentAccreditation::class, 'tournament_competition_id');
    }
    public function rosters(): HasMany
    {
        return $this->hasMany(Roster::class);
    }


    public function approvedRosters()
    {
        return $this->rosters()->approved();
    }
    public function submittedRosters()
    {
        return $this->rosters()->submitted();
    }
    public function winnerRoster()
    {
        return $this->belongsTo(Roster::class, 'winner_roster_id', 'id');
    }

    public function runnerRoster()
    {
        return $this->belongsTo(Roster::class, 'runner_up_roster_id', 'id');
    }

     public function thirdPlaceRoster()
    {
        return $this->belongsTo(Roster::class, 'third_place_roster_id', 'id');
    }

     public function thirdPlace2Roster()
    {
        return $this->belongsTo(Roster::class, 'third_place_2_roster_id', 'id');
    }
    public function certificates(): HasMany
    {
        return $this->hasMany(CompetitionCertificate::class);
    }

    public function fixtures()
    {


        return $this->hasMany(TournamentFixture::class, 'tournament_competition_id');
    }
    public function getDisplayNameAttribute(): string
    {
        return $this->name ?: "{$this->tournamentCategory->category->code} {$this->gender->label()}";
    }

    public function poolsGenerated(): bool
    {
        return !is_null($this->pools_generated_at);
    }

    public function poolsLocked(): bool
    {
        return !is_null($this->pools_locked_at);
    }

    public function fixturesGenerated(): bool
    {
        return !is_null($this->fixture_generated_at);
    }

    public function fixturesLocked(): bool
    {
        return !is_null($this->fixtures_locked_at);
    }


}