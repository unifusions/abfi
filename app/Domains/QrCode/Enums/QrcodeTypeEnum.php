<?php 

namespace App\Domains\QrCode\Enums;

enum QrcodeTypeEnum:string {
    case PLAYER = 'player';
    case OFFICIAL ='official';
    case ROSTER ='roster';
    case TOURNAMENT = 'tournament';
    case CERTIFICATE = 'certificate';
    case ACCREDITATION = 'accreditation';
}