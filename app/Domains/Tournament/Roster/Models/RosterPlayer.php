<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\Player\Models\Player;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['roster_id', 'player_id', 'jersey_number', 'is_captain', 'is_vice_captain'])]

class RosterPlayer extends Model{
    use HasUuids;

    protected $casts = [
        'is_captain' => 'boolean',
        'is_vice_captain' => 'boolean'
    ];

    public function roster(){
        return $this->belongsTo(Roster::class);
    }
    public function player(){
        return $this->belongsTo(Player::class);
    }
}