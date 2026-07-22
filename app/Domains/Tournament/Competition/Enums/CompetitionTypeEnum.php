<?php

namespace App\Domains\Tournament\Competition\Enums;
enum CompetitionTypeEnum: string
{
    case BOYS = 'boys';
    case GIRLS = 'girls';

    case MEN = 'men';
    case WOMEN = 'women';
    case MIXED = 'mixed';
}