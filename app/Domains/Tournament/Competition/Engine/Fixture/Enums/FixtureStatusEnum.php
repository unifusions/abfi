<?php 

namespace App\Domains\Tournament\Competition\Engine\Fixture\Enums;

enum FixtureStatusEnum :string{
    case SCHEDULED = 'scheduled';
     case COMPLETED = 'completed';
     case CANCELLED = 'cancelled';
     case WALKOVER = 'walkover';

     public function label(): string
    {
        return match ($this) {
            self::SCHEDULED => 'Scheduled',
          self::COMPLETED => 'Completed',
            self::WALKOVER => 'Walkover',
            self::CANCELLED => 'Cancelled',
        };
    }
}