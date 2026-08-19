<?php

namespace App\Domains\AccessControl\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

trait HandlesAuthorization
{
    /**
     * Allow Super Admin to bypass all policy checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if ($user->isSuperAdmin()) {
            return true;
        }

        return null;
    }

    /**
     * Check if the user has the required permission.
     */
    protected function can(User $user, string $permission): bool
    {
        return $user->hasPermission($permission);
    }

    /**
     * Check if the resource belongs to the user's organization.
     * Federation Admin can access all organizations.
     */
    protected function owns(User $user, Model $model): bool
    {
        if ($user->hasRole('federation.admin')) {
            return true;
        }

        return $user->organization_id === $model->organization_id;
    }

    /**
     * Permission + Ownership check.
     */
    protected function authorizeOrganization(
        User $user,
        string $permission,
        Model $model
    ): bool {
        return $this->can($user, $permission)
            && $this->owns($user, $model);
    }

    /**
     * Permission only.
     */
    protected function authorizePermission(
        User $user,
        string $permission
    ): bool {
        return $this->can($user, $permission);
    }

    protected function isFederationAdmin(User $user): bool
    {
        return $user->hasRole('federation.admin');
    }
}