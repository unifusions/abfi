<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\Player\Models\Player;
use App\Domains\QrCode\Models\QrCode;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

#[Fillable([
    'roster_id',
    'player_id',
    'jersey_number',
    'is_captain',
    'is_vice_captain',
    'is_approved',
    'is_request_resubmissions',
    'snapshot'
])]

class RosterPlayer extends Model
{
    use HasUuids;

    protected $casts = [
        'is_captain' => 'boolean',
        'is_vice_captain' => 'boolean',
        'is_approved' => 'boolean',
        'is_request_resubmissions' => 'boolean'
    ];

    public function roster()
    {
        return $this->belongsTo(Roster::class);
    }
    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function qrCodes(): MorphMany
    {
        return $this->morphMany(QrCode::class, 'qrable');
    }
}
