<?php 

namespace App\Domains\AccessControl\Enums;

enum RoleEnum : string {
    case FEDERATION_ADMIN = 'Admin';
    case FEDERATION_STAFF = 'Staff';
    case ASSOCIATION_ADMIN = 'Association Admin';
    case ASSOCIATION_STAFF = 'Association Staff';
    
 

}