<?php

namespace App\Domains\Tournament\Enums;

enum TournamentTypeEnum: string
{

    case SUB_JUNIORS = 'sub_juniors';
    case JUNIORS = 'juniors';
    case SENIORS = 'seniors';
    case ZONE = 'zone';
    case FEDERATION_CUP = 'federation_cup';


    public function name(){
         return match ($this) {
            self::SUB_JUNIORS => 'Sub Juniors - U 15 National Championship',
            self::JUNIORS => 'Juniors - U 17 National Championship',
            self::SENIORS => 'Seniors National Championship',
            self::ZONE => 'Zonal Championship',
            self::FEDERATION_CUP => 'National Federation Cup',

        };
    }
    public function label()
    {
        return match ($this) {
            self::SUB_JUNIORS => 'Sub Juniors - U15',
            self::JUNIORS => 'Juniors - U17',
            self::SENIORS => 'Seniors',
            self::ZONE => 'Zone',
            self::FEDERATION_CUP => 'Federation Cup',

        };
    }

    public function code()
    {
        return match ($this) {
            self::SUB_JUNIORS => 'u15',
            self::JUNIORS => 'u17',
            self::SENIORS => 'sr',
            self::ZONE => 'zc',
            self::FEDERATION_CUP => 'fc',
        };
    }
    public function sequenceName()
    {
        return match ($this) {
            self::SUB_JUNIORS => 'u15_tournament_code',
            self::JUNIORS => 'u17_tournament_code',
            self::SENIORS => 'sr_tournament_code',
            self::ZONE => 'fc_tournament_code',
            self::FEDERATION_CUP => 'zc_tournament_code',
        };

    }


    public function competitions()
    {
        return match ($this) {
            self::SUB_JUNIORS => [
                ['gender' => 'boys', 'category' => 'U15'],
                ['gender' => 'girls', 'category' => 'U15'],
            ],
            self::JUNIORS => [
                ['gender' => 'boys', 'category' => 'U17'],
                ['gender' => 'girls', 'category' => 'U17'],
            ],
            self::SENIORS => [
                ['gender' => 'men', 'category' => 'Senior'],
                ['gender' => 'women', 'category' => 'Senior'],
            ],
            self::ZONE => [
                ['gender' => 'boys', 'category' => 'U15'],
                ['gender' => 'girls', 'category' => 'U15'],
            ],
            self::FEDERATION_CUP => [
                ['gender' => 'men', 'category' => 'Senior'],
                ['gender' => 'women', 'category' => 'Senior'],
            ],
        };
    }

}