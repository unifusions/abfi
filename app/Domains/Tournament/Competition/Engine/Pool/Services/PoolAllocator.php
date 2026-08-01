<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolGenerationMethod;
use App\Domains\Tournament\Competition\Engine\Pool\Strategies\ManualAllocationStrategy;
use App\Domains\Tournament\Competition\Engine\Pool\Strategies\PureRandomAllocationStrategy;
use App\Domains\Tournament\Competition\Engine\Pool\Strategies\SeededAllocationStrategy;
use App\Domains\Tournament\Competition\Engine\Pool\Strategies\Contracts\AllocationStrategy;
use App\Domains\Tournament\Competition\Engine\Pool\Strategies\RandomAllocationStrategy;

class PoolAllocator
{
    public function resolve(PoolGenerationMethod $method): AllocationStrategy
    {
        return match ($method) {

            PoolGenerationMethod::SEEDED =>
                app(SeededAllocationStrategy::class),

            PoolGenerationMethod::RANDOM =>
                app(RandomAllocationStrategy::class),

            PoolGenerationMethod::MANUAL =>
                app(ManualAllocationStrategy::class),
        };
    }
}