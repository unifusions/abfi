<?php

namespace App\Domains\Compliance\Models;

use App\Domains\Tournament\Models\TournamentCategory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['name',
        'code',
        'minimum_age',
        'maximum_age',
        'is_active',])]
class Category extends Model{
 use HasUuids;
  protected $casts = [
        'minimum_age' => 'integer',
        'maximum_age' => 'integer',
        'is_active'   => 'boolean',
    ];

    
}