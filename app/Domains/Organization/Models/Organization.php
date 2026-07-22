<?php

namespace App\Domains\Organization\Models;
use App\Domains\Compliance\Models\State;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

 
#[Fillable(['name','contact_person', 'code', 'phone','email', 'organization_id', 'state_id'])]
class Organization extends Model{
     use HasUuids, SoftDeletes, Searchable;


     public function state(){
        return $this->belongsTo(State::class, 'state_id');
    }
    
}