2<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\DTOs;

use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolGenerationMethod;

readonly class PoolGenerationData
{
    public function __construct(
        public int $poolCount,
        public PoolGenerationMethod $generationMethod,
    ) {}
}