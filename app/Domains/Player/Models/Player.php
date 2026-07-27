<?php

namespace App\Domains\Player\Models;
use App\Domains\AccessControl\Enums\RoleEnum;
use App\Domains\AccessControl\Scopes\BaseOrganizationScope;
use App\Domains\AccessControl\Traits\HasScope;
use App\Domains\Compliance\Models\BaseballPosition;

use App\Domains\Compliance\Models\State;
use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\Media\Models\Media;
use App\Domains\Media\Models\Mediable;
use App\Domains\Media\Traits\HasMedia;
use App\Domains\Organization\Models\Organization;
use App\Models\User;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;


#[Fillable([
    'player_code',
    'first_name',
    'middle_name',
    'last_name',
    'father_name',
    'organization_id',
    'gender',
    'dob',
    'blood_group',
    'aadhar_no',
    'passport',
    'email',
    'phone',
    'emergency_contact_phone',
    'address',
    'city',
    'district',
    'pincode',
    'is_active',
    'is_verified',
    'verified_at',
    'verified_by',
    'created_by',
    'updated_by',
    'state_id',

])]


class Player extends Model
{
    use HasFactory, HasUuids, HasMedia, Searchable, HasScope;


    public function positions()
    {
        return $this->belongsToMany(
            BaseballPosition::class,
            'player_positions'
        );
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function mediaLinks()
    {
        return $this->morphMany(Mediable::class, 'mediable');
    }

    public function getProfileMediaAttribute(): ?Media
    {
        return $this->mediaLinks

            ->where('collection', MediaCollectionEnum::PROFILE->value)

            ->first()

                ?->media;
    }

    protected static function booted()
    {
        static::addGlobalScope(new BaseOrganizationScope());
    }

    public function scopeForCompetition($query, $competition){
        return $query->whereGender($competition->gender());
    }
  
}

