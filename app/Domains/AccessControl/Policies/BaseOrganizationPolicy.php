<?php

namespace App\Domains\AccessControl\Policies;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

abstract class BaseOrganizationPolicy
{
    public function before(User $user, string $ability): bool|null
    {
        if ($user->isSuperAdmin()) {
            return true;
        }

        return null;
    }

    protected function can(User $user, string $permission): bool
    {
        return $user->hasPermission($permission);
    }

    protected function owns(User $user, Model $model): bool
    {
        if ($user->hasRole('federation.admin')) {
            return true;
        }

        return $user->organization_id === $model->organization_id;
    }
}