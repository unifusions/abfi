<?php

namespace App\Domains\AccessControl\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'description','code', 'is_system'])] 
class Role  extends Model{
    use HasUuids;

     public function permissions()
    {
        return $this->belongsToMany(Permission::class)
            ->withTimestamps();
    }

    public function users()
    {
        return $this->belongsToMany(\App\Models\User::class)
            ->withTimestamps();
    }
}