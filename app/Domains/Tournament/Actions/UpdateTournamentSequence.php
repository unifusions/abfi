<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Compliance\Models\CodeSequence;

class UpdateTournamentSequence
{

    public function handle($tournamentType)
    {

        if ($tournamentType !== 'others') {
            $name = $tournamentType;
            $sequence =  CodeSequence::where('name', $tournamentType)
                ->lockForUpdate()
                ->firstOrFail();

            $sequence->increment('last_number');
            $sequence->refresh();
            return $sequence;
        }
    }
}
