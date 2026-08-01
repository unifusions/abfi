<?php

namespace App\Domains\Tournament\Competition\Format\Exceptions;

use Exception;

class UnsupportedTournamentFormatException extends Exception
{
    public function __construct()
    {
        parent::__construct('Unsupported tournament format.');
    }
}