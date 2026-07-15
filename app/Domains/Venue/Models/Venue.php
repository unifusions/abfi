<?php
namespace App\Domains\Venue\Models;
use App\Domains\Compliance\Models\State;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

#[Fillable(['name', 'state_id', ''])]
class Venue extends Model
{
    use HasUuids, SoftDeletes, Searchable;

 

    public function state(){
        return $this->belongsTo(State::class);
    }

}