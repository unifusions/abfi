<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\Player\Models\Player;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['roster_id', 'type', 'replacing_id', 'replacement_id', 'reason', 'remarks', 'replaced_by'])]

class RosterPlayerReplacement extends Model
{
    use HasUuids;
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',

        ];
    }
    public function roster()
    {
        return $this->belongsTo(Roster::class, 'roster_id', 'id');
    }

    public function replacingPlayer()
    {
        return $this->belongsTo(Player::class, 'replacing_id', 'id');
    }


    public function replacementPlayer()
    {
        return $this->belongsTo(Player::class, 'replacement_id', 'id');
    }
}