<?php

namespace App\Domains\Tournament\Competition\Certificate\Services;

use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;

class CertificateNumberGenerator
{
    public function generate(): string
    {
        do {
            $number = 'ABFI-' . now()->format('Y') . '-' .
                str_pad(
                    (string) random_int(1, 999999),
                    6,
                    '0',
                    STR_PAD_LEFT
                );
        } while (
            CompetitionCertificate::where(
                'certificate_number',
                $number
            )->exists()
        );

        return $number;
    }
}