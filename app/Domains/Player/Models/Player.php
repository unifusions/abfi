<?php

namespace App\Domains\Player\Models;
use App\Domains\Compliance\Models\BaseballPosition;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
    'updated_by'

])]


class Player extends Model
{
    use HasFactory, HasUuids, SoftDeletes;


    public function positions()
    {
        return $this->belongsToMany(
            BaseballPosition::class,
            'player_positions'
        );
    }

}

