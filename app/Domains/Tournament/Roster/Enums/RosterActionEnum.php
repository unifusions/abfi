<?php


namespace App\Domains\Tournament\Roster\Enums;

enum RosterActionEnum: string
{
    case CONTINUE = 'continue';
    case REVIEW = 'review';
    case VIEW = 'view';
    public function label(): string
    {
        return match ($this) {
            self::CONTINUE => 'Continue',
            self::REVIEW => 'Review',
            self::VIEW => 'View',
        };
    }

    public function route(): string
    {
        return match ($this) {
            self::CONTINUE => 'rosters.rosters.builder',
            self::REVIEW => 'rosters.edit',
            self::VIEW => 'rosters.show',
        };
    }

}