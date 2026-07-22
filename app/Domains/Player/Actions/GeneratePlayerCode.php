<?php


namespace App\Domains\Player\Actions;

use App\Domains\Compliance\Models\CodeSequence;
use App\Domains\Organization\Models\Organization;
use DB;

class GeneratePlayerCode
{
    public function handle($organizationId, $gender)
    {


        $org = Organization::with('state')->find($organizationId);
    
        $stateCode = strtoupper($org?->state?->short_code);
        $sequence = CodeSequence::where('name', 'player_code')
            ->lockForUpdate()
            ->firstOrFail();

        $sequence->increment('last_number');
        $sequence->refresh();

        return sprintf(
            '%s%s%05d%s',
            $stateCode,
            strtoupper('ply'),
            $sequence->last_number,
            $gender
        );
    }


}