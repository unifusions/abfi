<?php 

namespace App\Domains\Tournament\Competition\Accreditation\Enums;

enum AccreditationHolderEnum : string{
    case PLAYER = 'player';
    case OFFICIAL = 'official';
}