<?php

namespace App\Domains\Tournament\Enums;
enum TournamentFormatEnum : string{
    case POOL_PLAY = 'pool_play';
    case ROUND_ROBIN = 'round_robin';
    case SINGLE_ELIMINATION = 'single_elimination';
    case DOUBLE_ELIMINATION = 'double_elimination';

     public function label() 
    {
        return match ($this) {
            self::POOL_PLAY => 'Pool Play',
            self::ROUND_ROBIN => 'Round Robin',
            self::SINGLE_ELIMINATION => 'Single Elimination',
            self::DOUBLE_ELIMINATION => 'Double Elimination',
            
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::POOL_PLAY => 'secondary',
            self::ROUND_ROBIN => 'primary',
            self::SINGLE_ELIMINATION => 'info',
            self::DOUBLE_ELIMINATION => 'warning',
            
        };
    }
    
}