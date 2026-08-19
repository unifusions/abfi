<?php 

namespace App\Domains\Tournament\Competition\Certificate\Enums;

enum CertificateTypeEnum: string
{
    case PARTICIPANT = 'participant';
    case WINNER = 'winner';
    case RUNNER_UP = 'runner_up';
    case THIRD_PLACE = 'third_place';

     public function title(): string
    {
        return match ($this) {
            self::PARTICIPANT => 'CERTIFICATE OF PARTICIPATION',
            self::WINNER => 'CERTIFICATE OF CHAMPIONSHIP',
            self::RUNNER_UP => 'CERTIFICATE OF ACHIEVEMENT',
            self::THIRD_PLACE => 'CERTIFICATE OF ACHIEVEMENT',
        };
    }

    public function achievement(): ?string
    {
        return match ($this) {
            self::PARTICIPANT => null,
            self::WINNER => 'CHAMPION',
            self::RUNNER_UP => 'RUNNER-UP',
            self::THIRD_PLACE => 'THIRD PLACE',
        };
    }
}