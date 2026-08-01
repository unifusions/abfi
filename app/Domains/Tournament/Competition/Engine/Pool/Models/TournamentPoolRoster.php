<?php 

namespace App\Domains\Tournament\Competition\Engine\Pool\Models;

use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['tournament_pool_id', 'roster_id', 'seed', 'position'])]
class TournamentPoolRoster extends Model{
use HasUuids;    
public function pool(){
        return $this->belongsTo(TournamentPool::class);
    }
    public function roster(){
        return $this->belongsTo(Roster::class);
    }
}