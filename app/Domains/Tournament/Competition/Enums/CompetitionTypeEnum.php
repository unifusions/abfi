<?php

namespace App\Domains\Tournament\Competition\Enums;
enum CompetitionTypeEnum: string
{
    case BOYS = 'boys';
    case GIRLS = 'girls';

    case MEN = 'men';
    case WOMEN = 'women';
    case MIXED = 'mixed';

    public function label(): string
    {
        return match ($this) {
            self::BOYS => 'Boys',
            self::GIRLS => 'Girls',
            self::MEN => 'Men',
            self::WOMEN => 'Women',
            self::MIXED => 'Mixed'
        };
    }
}