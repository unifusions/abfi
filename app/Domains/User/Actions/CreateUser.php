<?php

namespace App\Domains\User\Actions;

use App\Models\User;

class CreateUser {
    public function handle(array $attributes): User{
        return User::create($attributes);
    }
}