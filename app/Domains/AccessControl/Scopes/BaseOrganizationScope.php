<?php

namespace App\Domains\AccessControl\Scopes;

use App\Models\User;
// use App\Domains\AccessControl\Contracts\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class BaseOrganizationScope implements Scope{
    //  public function apply(Builder $builder, User $user): Builder
    // {
    //     // Super Admin
    //     if ($user->isSuperAdmin()) {
    //         return $builder;
    //     }

    //     // // Federation Admin
    //     // if ($user->hasRole('federation.admin')) {
    //     //     return $builder;
    //     // }

    //     // Association / Organization Users
    //     return $builder->where(
    //         $builder->getModel()->getTable() . '.organization_id',
    //         $user->organization_id
    //     );
    // }

    public function apply(Builder $builder, Model $model): void
    {
        $user = auth()->user();

        if (!$user || $user->is_super_admin) {
            return;
        }

        $builder->where(
            $model->getTable().'.organization_id',
            $user->organization_id
        );
    }
}