<?php

namespace App\Domains\Organization\Models;
use App\Domains\Compliance\Models\State;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

 
#[Fillable(['name'])]
class Organization extends Model{
     use HasUuids, SoftDeletes, Searchable;


     public function state(){
        return $this->belongsTo(State::class);
    }
    
}