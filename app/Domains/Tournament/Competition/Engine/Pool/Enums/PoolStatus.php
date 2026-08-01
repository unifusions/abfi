<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Enums;

enum PoolStatus: string
{
    case GENERATED = 'generated';

    case LOCKED = 'locked';

    public function label(): string
    {
        return match ($this) {
            self::GENERATED => 'Generated',
            self::LOCKED => 'Locked',
        };
    }
}