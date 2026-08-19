<?php

namespace App\Domains\Tournament\Competition\Enums;
enum CompetitionPhaseEnum: string
{

    case REGISTRATION_OPEN = 'registration_open';

    case REGISTRATION_CLOSED = 'registration_closed';


    case VERIFICATION = 'verification';

    case ISSUE_IDCARDS = 'issue_idcards';
    case SCHEDULED = 'scheduled';

    case COMPLETED = 'completed';
    case PROCESS_CERTIFICATES = 'process_certificate';

    public function label(): string
    {
        return match ($this) {
            self::REGISTRATION_OPEN => 'Registration Open',
            self::REGISTRATION_CLOSED => 'Registration Closed',
            self::VERIFICATION => 'Verification',
            self::ISSUE_IDCARDS => 'Issue ID Cards',
            self::SCHEDULED => 'Scheduled',
            self::COMPLETED => 'Completed',
            self::PROCESS_CERTIFICATES => 'Process Certificates'

        };
    }
}