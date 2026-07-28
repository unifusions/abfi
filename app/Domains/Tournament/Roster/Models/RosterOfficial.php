<?php

namespace App\Domains\Tournament\Roster\Models;

use App\Domains\Official\Models\Official;
 
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['roster_id', 'official_id', 'type'])]

class RosterOfficial extends Model{
    use HasUuids;

    

    public function roster(){
        return $this->belongsTo(Roster::class);
    }
    public function official(){
        return $this->belongsTo(Official::class);
    }
}