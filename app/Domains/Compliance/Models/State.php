<?php

namespace App\Domains\Compliance\Models;

use App\Domains\Organization\Models\Organization;
use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

#[Fillable(['name', 'short_code', 'region', 
'address_line_1', 'address_line_2', 'phone', 'email',
'president', 'secretary', 'code', 'state_id','organization_id'
])]
class State extends Model
{
    public function players() {
     return $this->HasManyThrough(Player::class, Organization::class);
    }

    public function rosters(){
        return $this->hasManyThrough(Roster::class, Organization::class);
    }
}
