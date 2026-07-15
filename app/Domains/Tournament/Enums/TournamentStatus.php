<?php

namespace App\Domains\Tournament\Enums;
enum TournamentStatus : string{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';

    case REGISTRATION_OPEN = 'registration_open';

    case REGISTRATION_CLOSED = 'registration_closed';

    case VERIFICATION = 'verification';

    case COMPETITION = 'competition';

    case COMPLETED = 'completed';

    case CANCELLED = 'cancelled';

    case ARCHIVED = 'archived';

     public function label() 
    {
        return match ($this) {
            self::DRAFT => 'Draft',
            self::PUBLISHED => 'Published',
            self::REGISTRATION_OPEN => 'Registration Open',
            self::REGISTRATION_CLOSED => 'Registration Closed',
            self::VERIFICATION => 'Verification',
            self::COMPETITION => 'Competition',
            self::COMPLETED => 'Completed',
            self::CANCELLED => 'Cancelled',
            self::ARCHIVED => 'Archived',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::DRAFT => 'secondary',
            self::PUBLISHED => 'primary',
            self::REGISTRATION_OPEN => 'info',
            self::REGISTRATION_CLOSED => 'warning',
            self::VERIFICATION => 'warning',
            self::COMPETITION => 'success',
            self::COMPLETED => 'success',
            self::CANCELLED => 'danger',
            self::ARCHIVED => 'dark',
        };
    }

}