<?php 

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;

class PoolCompletion{
    public function isCompleted(TournamentPool $pool):bool{
        return $pool->fixtures()->where('status', '!=',FixtureStatusEnum::COMPLETED)->doesntExist();
    }
}