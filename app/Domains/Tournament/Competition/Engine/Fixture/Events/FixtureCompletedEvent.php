<?php 

namespace App\Domains\Tournament\Competition\Engine\Fixture\Events;

use App\Domains\Tournament\Competition\Engine\Fixture\Models\TournamentFixture;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\SerializesModels;

class FixtureCompletedEvent{
    use Dispatchable, SerializesModels;

    public function __construct(
        public TournamentFixture $fixture
    ){}
}