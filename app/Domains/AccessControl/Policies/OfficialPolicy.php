<?php

namespace App\Domains\AccessControl\Policies;

use App\Domains\AccessControl\Traits\HandlesAuthorization;
use App\Domains\Official\Models\Official;
use App\Models\User;

class OfficialPolicy
{
    use HandlesAuthorization;
    public function viewAny(User $user): bool
    {
       
        return $this->authorizePermission($user, 'official.view');
    }

    public function view(User $user, Official $official): bool
    {
        return $this->authorizePermission($user, 'official.view');

    }

    public function create(User $user): bool
    {
        return $this->authorizePermission($user, 'official.create');
    }

    public function update(User $user, Official $official): bool
    {
        return $this->authorizePermission($user, 'official.update');

    }

    public function delete(User $user, Official $official): bool
    {
        return $this->authorizePermission($user, 'official.delete');

    }

    public function restore(User $user, Official $official): bool
    {
        return $this->authorizePermission($user, 'official.restore');

    }

    public function forceDelete(User $user, Official $official): bool
    {
        return $this->authorizePermission($user, 'official.force-delete');

    }

}