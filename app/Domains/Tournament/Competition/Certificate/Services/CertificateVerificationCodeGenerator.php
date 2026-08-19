<?php

namespace App\Domains\Tournament\Competition\Certificate\Services;

use Illuminate\Support\Str;

class CertificateVerificationCodeGenerator
{
    public function generate(): string
    {
        return strtoupper(
            Str::random(20)
        );
    }
}