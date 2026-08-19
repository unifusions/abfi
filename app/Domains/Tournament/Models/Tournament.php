<?php

namespace App\Domains\Tournament\Models;

use App\Domains\Category\Models\Category;
use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Venue\Models\Venue;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Tournament extends Model
{
    use HasFactory;

    use HasUuids;



    protected $fillable = [
        'name',
        'slug',
        'description',

        'venue_id',
        'organization_id',
        'category_id',


        'competition_format',
        'status',
        'registration_open_at',
        'registration_close_at',
        'starts_at',
        'ends_at',
        'published_at',
        'created_by',
        'updated_by',
    ];
    protected $casts = [

        'status' => TournamentStatus::class,
        'competition_format' => TournamentFormatEnum::class,
        'registration_open_at' => 'datetime',
        'registration_close_at' => 'datetime',
        'starts_at' => 'date:Y-m-d',
        'ends_at' => 'date:Y-m-d',
        'published_at' => 'datetime',
    ];


    //RELATIONSHIPS

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function competitions()
    {
        return $this->hasMany(TournamentCompetition::class);
    }

    public function rosters(): HasManyThrough
    {
        return $this->hasManyThrough(
            Roster::class,
            TournamentCompetition::class,
        );
    }

    public function submittedRoster(): HasManyThrough
    {
        return $this->rosters()->submitted();
    }

    // TOURNAMENT SCOPES

    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at');
    }
    public function scopeDraft($query)
    {
        return $query->whereNull('published_at');
    }

    public function isPublished(): bool
    {
        return !is_null($this->published_at);
    }
}