<?php

namespace App\Domains\AccessControl\Traits;
use App\Domains\AccessControl\Models\Permission;
use App\Domains\AccessControl\Models\Role;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait HasRoles
{

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user',
        'user_id',
        'role_id')->withTimestamps();
    }

    public function permissions()
    {
        return Permission::query()->
            whereHas('roles', function ($query) {
                $query->whereIn('roles.id', $this->roles()->pluck('roles.id'));
            });
    }

    public function isSuperAdmin(): bool
    {
        return $this->is_super_admin;
    }


    public function hasRole(string|array $roles): bool
    {
        if ($this->isSuperAdmin()) {
            return true;
        }


        $roles = (array) $roles;

        return $this->roles()
            ->whereIn('code', $roles)
            ->exists();
    }

    public function hasAnyRole(array $roles): bool
    {
        return $this->hasRole($roles);
    }

    public function hasAllRoles(array $roles): bool
    {
        return collect($roles)
            ->every(fn($role) => $this->hasRole($role));
    }

    public function hasPermission(string|array $permissions): bool
    {
        if ($this->isSuperAdmin()) {
            return true;
        }
 
        $permissions = (array) $permissions;

        return Permission::query()
            ->whereIn('code', $permissions)
            ->whereHas('roles.users', function ($query) {
                $query->whereKey($this->id);
            })
            ->exists();
    }



}