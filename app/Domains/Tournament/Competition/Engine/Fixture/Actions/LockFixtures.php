<?php 

namespace App\Domains\Tournament\Competition\Engine\Fixture\Actions;

use App\Domains\Tournament\Models\TournamentCompetition;

class LockFixtures{
    public function handle(TournamentCompetition $competition):void{
        $competition->update([
            'fixture_locked_at' => now(),
        ]);
    }
}