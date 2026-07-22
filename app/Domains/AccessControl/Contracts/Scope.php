<?php

namespace App\Domains\AccessControl\Contracts;

 
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

interface Scope
{
    public function apply(Builder $builder, User $user): Builder;
}