<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Enums;

enum PoolGenerationMethod: string
{
    case RANDOM = 'random';

    case SEEDED = 'seeded';

    case MANUAL = 'manual';

    public function label(): string
    {
        return match ($this) {
            self::RANDOM => 'Random',
            self::SEEDED => 'Seeded',
            self::MANUAL => 'Manual',
        };
    }
}