<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\AccessControl\Scopes\BaseOrganizationScope;
use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Models\Tournament;
use App\Domains\Tournament\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Enums\RosterActionEnum;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Models\User;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
    'name',
    'tournament_competition_id',
    'organization_id',
    'status',
    'submitted_at',
    'remarks',
    'created_by',
])]
class Roster extends Model
{
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

    public function players()
    {
        return $this->hasMany(RosterPlayer::class);
    }

    public function officials()
    {
        return $this->hasMany(RosterOfficial::class);
    }


    public function actionFor(User $user): RosterActionEnum
    {
        $ownsRoster = $this->organization_id === $user->organization_id ? true : false;
        $canReview = $user->can('roster.review') || $user->isSuperAdmin();
        // Builder mode
        if (
            $ownsRoster &&
            in_array($this->status, [
                RosterStatusEnum::DRAFT,
                RosterStatusEnum::REJECTED,

            ])
        ) {

            return RosterActionEnum::CONTINUE;
        }


        if ($canReview) {
          
            if ($this->status->value === RosterStatusEnum::SUBMITTED->value) {
              
                return RosterActionEnum::REVIEW;
            }
            return RosterActionEnum::VIEW;
        }

        return match ($this->status) {
            RosterStatusEnum::DRAFT,
            RosterStatusEnum::REJECTED => RosterActionEnum::CONTINUE,

            default => RosterActionEnum::VIEW,
        };
    }
    protected static function booted()
    {
        static::addGlobalScope(new BaseOrganizationScope());
    }
}
