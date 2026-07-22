<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Models\User;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
        'tournament_competition_id',
        'organization_id',
        'status',
        'submitted_at',
        'remarks',
        'created_by',
    ])]
class Roster extends Model{
    use HasUuids, SoftDeletes;

    protected $casts = [
        'status' => RosterStatusEnum::class,
        'submitted_at' => 'datetime',
    ];

       public function competition() 
    {
        return $this->belongsTo(TournamentCompetition::class, 'tournament_competition_id');
    }

    public function organization() 
    {
        return $this->belongsTo(Organization::class);
    }

    public function creator() 
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // public function players() 
    // {
    //     return $this->hasMany(RosterPlayer::class);
    // }

    // public function officials() 
    // {
    //     return $this->hasMany(RosterOfficial::class);
    // }
}