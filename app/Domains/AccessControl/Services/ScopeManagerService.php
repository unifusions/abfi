<?php

namespace App\Domains\AccessControl\Services;

use App\Domains\AccessControl\Contracts\ScopeContext;
use Illuminate\Database\Eloquent\Builder;
use InvalidArgumentException;

class ScopeManagerService
{
    public function __construct(
        protected ScopeRegistryService $registry,
    ) {}

    /**
     * Apply the registered scope for the given model.
     */
    public function apply(
        string $model,
        Builder $builder,
        ScopeContext $context,
    ): Builder {
        $scope = $this->registry->resolve($model);

        if (! method_exists($scope, 'apply')) {
            throw new InvalidArgumentException(
                sprintf(
                    'Scope [%s] must implement an apply() method.',
                    $scope::class
                )
            );
        }

        return $scope->apply($builder, $context->user());
    }
}