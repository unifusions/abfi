<?php

namespace App\Domains\AccessControl\Scopes;

use App\Models\User;
// use App\Domains\AccessControl\Contracts\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class BaseOrganizationScope implements Scope
{

    public function apply(Builder $builder, Model $model): void
    {
        $user = auth()->user();

        if (!$user || $user->is_super_admin || $user->hasRole('admin')) {
            return;
        }

        if($user->hasPermission())

        $builder->where(
            $model->getTable() . '.organization_id',
            $user->organization_id
        );
    }
}
