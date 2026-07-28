<?php 

namespace App\Domains\Official\Models;

use App\Domains\AccessControl\Scopes\BaseOrganizationScope;
use App\Domains\AccessControl\Traits\HasScope;
use App\Domains\Compliance\Models\State;
use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\Media\Models\Media;
use App\Domains\Media\Models\Mediable;
use App\Domains\Media\Traits\HasMedia;
use App\Domains\Organization\Models\Organization;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

#[Fillable(['first_name', 
'official_code',
'middle_name',
'last_name',
'father_name',
'organization_id',
'gender', 'dob', 'blood_group', 'aadhar_no', 'passport', 'email', 'phone', 'emergency_contact_phone',
'state_id', 'address', 'city', 'district', 'pincode', 'marital_status', 'type', 'is_active', 'is_verified', 'verified_at',
'verified_by', 'created_by', 'updated_by',
'account_bank_name', 'account_number', 'account_ifsc_code'
])]
class Official extends Model{
     use HasFactory, HasUuids, HasMedia, Searchable, HasScope;



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
}