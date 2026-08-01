<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Services;

use App\Domains\Tournament\Competition\Engine\Pool\DTOs\PoolGenerationData;
use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolGenerationMethod;
use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolStatus;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPoolRoster;
use App\Domains\Tournament\Models\TournamentCompetition;
use Illuminate\Support\Facades\DB;

class PoolGenerator
{
    public function __construct(
        protected PoolValidator $validator,
        protected PoolAllocator $allocator,
        protected SeedResolver $seedResolver,
    ) {
    }

    public function generate(
        TournamentCompetition $competition,
        PoolGenerationData $data,
    ): void {
        $this->validator->validate($competition, $data);

        $poolCount = $competition->pool_count;

        $rosters = $competition->approvedRosters()->get();

        $seededRosters = collect();

        if ($data->generationMethod === PoolGenerationMethod::SEEDED) {
            $seededRosters = $this->seedResolver->resolve($competition);

            $rosters = $rosters
                ->reject(fn($roster) => $seededRosters->contains('id', $roster->id))
                ->values();
        }

        $allocation = $this->allocator->resolve(
            $data->generationMethod
        )->allocate(
                $rosters,
                $data->poolCount,
                $seededRosters,
            );

             
        DB::transaction(function () use ($competition, $allocation) {
// dd($competition);
            foreach ($allocation as $index => $rosters) {

                $pool = TournamentPool::create([
                    'tournament_competition_id' => $competition->id,
                    'name' => 'Pool ' . chr(65 + $index),
                    'code' => chr(65 + $index),
                    'display_order' => $index + 1,


                ]);
 
                foreach ($rosters as $position => $roster) {
             
                    TournamentPoolRoster::create([
                        'tournament_pool_id' => $pool->id,
                        'roster_id' => $roster->id,
                        'seed' => $roster->seed ?? null,
                        'position' => $position + 1,
                    ]);
  
                }

            }
            $competition->pool_count = count($allocation);
            $competition->pools_generated_at = now();
            $competition->save();
        });
    }
}