<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\AccessControl\Scopes\BaseOrganizationScope;
use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPoolRoster;
 
 
use App\Domains\Tournament\Roster\Enums\RosterActionEnum;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Models\User;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use SpomkyLabs\Pki\X509\Certificate\Certificate;

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
        return $this->belongsTo(\App\Domains\Tournament\Competition\Models\TournamentCompetition::class, 'tournament_competition_id');
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

    public function pools()
    {
        return $this->belongsTo(TournamentPoolRoster::class);
    }

    public function accreditations(){
        return $this->hasMany(TournamentAccreditation::class, 'roster_id');
    }

    public function certificates(){
        return $this->hasMany(CompetitionCertificate::class, 'roster_id');
    }
    public function scopeApproved(Builder $query)
    {
        return $query->where('status', RosterStatusEnum::APPROVED);
    }

    public function scopeSubmitted(Builder $query)
    {
        return $query->where('status', RosterStatusEnum::SUBMITTED)->orWhere('status', RosterStatusEnum::APPROVED);
    }
    public function actionFor(User $user): RosterActionEnum
    {
        
        $ownsRoster = $this->organization_id === $user->organization_id ? true : false;
        $canReview = $user->can('roster.review') || $user->isSuperAdmin() ||  $user->hasRole('admin');
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
            RosterStatusEnum::REJECTED => RosterActionEnum::CONTINUE ,

            default => RosterActionEnum::VIEW,
        };
    }
    protected static function booted()
    {
        static::addGlobalScope(new BaseOrganizationScope());
    }
}
