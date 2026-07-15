<?php

namespace App\Domains\AccessControl\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'module', 'code', 'description'])]
class Permission extends Model{

use HasUuids;
     public function roles()
    {
        return $this->belongsToMany(Role::class)
            ->withTimestamps();
    }
}