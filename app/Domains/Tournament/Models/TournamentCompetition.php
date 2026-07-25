<?php

namespace App\Domains\Tournament\Models;

use App\Domains\Shared\Enums\GenderEnum;
use App\Domains\Tournament\Roster\Models\Roster;
 
 
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TournamentCompetition extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $fillable = [
        'tournament_id',
        'name',
        'gender',
        'is_active',
        'competition_type'
    ];

    protected $casts = [
        'gender'    => GenderEnum::class,
        'is_active' => 'boolean',
    ];
 
    public function tournament (){
        return $this->belongsTo(Tournament::class);
    }

    public function rosters(): HasMany
    {
        return $this->hasMany(Roster::class);
    }

    public function getDisplayNameAttribute(): string
    {
        return $this->name ?: "{$this->tournamentCategory->category->code} {$this->gender->label()}";
    }
}