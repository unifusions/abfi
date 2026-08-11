<?php 

namespace  App\Domains\Tournament\Competition\Engine\Fixture\Enums;

enum FixtureTypeEnum : string {
    case POOL = 'pool';
    case KNOCKOUT = 'knockout';
}