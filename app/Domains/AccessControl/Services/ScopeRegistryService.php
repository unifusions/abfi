<?php

namespace App\Domains\AccessControl\Services;

use App\Domains\AccessControl\Contracts\Scope;
use InvalidArgumentException;

class ScopeRegistryService
{
   protected array $scopes = [];
 
    public function register(string $model, string $scope): void
    {
        $this->scopes[$model] = $scope;
    }

    /**
     * @param class-string $model
     */
    public function resolve(string $model): Scope
    {
        if (! isset($this->scopes[$model])) {
            throw new InvalidArgumentException(
                "No scope registered for model [{$model}]."
            );
        }

        return app($this->scopes[$model]);
    }
}