<?php 

namespace App\Domains\Tournament\Competition\Engine\Fixture\Enums;

enum FixtureStageEnum : string {
    case POOL = 'pool';
    case QUARTER_FINAL = 'quarter_final';
    case SEMI_FINAL = 'semi_final';
    case THIRD_PLACE = 'third_place';
    case FOURTH_PLACE = 'fourth_place';
    case FINAL = 'final';
}