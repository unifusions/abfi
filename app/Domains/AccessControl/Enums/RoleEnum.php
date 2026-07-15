<?php 

namespace App\Domains\AccessControl\Enums;

enum RoleEnum : string {
    case FEDERATION_ADMIN = 'Federation Admin';
    case FEDERATION_STAFF = 'Federation Staff';
    case ASSOCIATION_ADMIN = 'Association Admin';
    case ASSOCIATION_STAFF = 'Association Staff';
    case OFFICIAL = 'Official';
    case REPORT_USER = 'Report User';

}