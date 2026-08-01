<?php

namespace App\Domains\Tournament\Models;

use App\Domains\Shared\Enums\GenderEnum;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
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
       
        'is_active',
        'competition_type',
        'pool_count', 'pools_generated_at', 'pools_locked_at'
    ];

    protected $casts = [
      
        'is_active' => 'boolean',
    ];
 
    public function gender(){
        return match($this->competition_type){
            'boys', 'men' => 'male',
            'girls', 'women' => 'female',
              default => throw new \RuntimeException('Invalid competition type.'),
        };
    }

    public function tournament (){
        return $this->belongsTo(Tournament::class);
    }

    public function pools() : HasMany
    {
        return $this->hasMany(TournamentPool::class);
    }
    public function rosters(): HasMany
    {
        return $this->hasMany(Roster::class);
    }
public function approvedRosters()
{
    return $this->rosters()->approved();
}
    public function getDisplayNameAttribute(): string
    {
        return $this->name ?: "{$this->tournamentCategory->category->code} {$this->gender->label()}";
    }
}