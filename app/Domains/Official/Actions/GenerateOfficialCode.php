<?php 

namespace App\Domains\Official\Actions;

use App\Domains\Compliance\Models\CodeSequence;
use App\Domains\Organization\Models\Organization;

class GenerateOfficialCode{
     public function handle($organizationId, $gender)
    {


        $org = Organization::with('state')->find($organizationId);
 
        $stateCode = strtoupper($org?->state?->short_code);
        $sequence = CodeSequence::where('name', 'official_code')
            ->lockForUpdate()
            ->firstOrFail();

        $sequence->increment('last_number');
        $sequence->refresh();
 
        return sprintf(
            '%s%s%05d%s',
            $stateCode,
            strtoupper('off'),
            $sequence->last_number,
            $gender
        );
    }
}