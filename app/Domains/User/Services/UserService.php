<?php

namespace App\Domains\User\Services;

use App\Domains\User\Actions\CreateUser;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserService
{
    public function __construct(
        protected CreateUser $createUser
    ) {
    }

    public function create(array $data): User
    {
        // $data['created_by'] = auth()->id();

        return DB::transaction(
            function () use ($data) {
                $user = $this->createUser->handle($data);
                $user->roles()->sync($data['role_id']);
                return $user->load('roles');
            }
        );

    }
}