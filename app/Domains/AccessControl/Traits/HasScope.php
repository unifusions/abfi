<?php

namespace App\Domains\AccessControl\Traits;

use App\Domains\AccessControl\Contracts\ScopeContext;
use App\Domains\AccessControl\Services\ScopeManager;
use App\Domains\AccessControl\Services\ScopeManagerService;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

trait HasScope
{
    public function scopeVisibleTo(
        Builder $builder,
        User|ScopeContext $context
    ): Builder {
        $context = $context instanceof ScopeContext
            ? $context
            : ScopeContext::make($context);

        return app(ScopeManagerService::class)
            ->apply(static::class, $builder, $context);
    }
}