<?php

namespace App\Domains\Tournament\Competition\Engine\Pool\Controllers;

use App\Domains\Tournament\Competition\Engine\Fixture\Services\FixtureGenerator;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\AddRosterToPool;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\DeletePools;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\GeneratePools;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\LockPools;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\MoveRosterBetweenPools;
use App\Domains\Tournament\Competition\Engine\Pool\Actions\RemoveRosterFromPool;
use App\Domains\Tournament\Competition\Engine\Pool\DTOs\PoolGenerationData;
use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolGenerationMethod;
use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Competition\Engine\Pool\Requests\GeneratePoolRequest;
use App\Domains\Tournament\Competition\Enums\CompetitionTypeEnum;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
 
use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PoolController extends Controller
{


    public function generate(
        GeneratePoolRequest $request,
        Tournament $tournament,
        TournamentCompetition $competition,
        GeneratePools $action
    ) {


        $action->handle(
            $competition,
            new PoolGenerationData(
                poolCount: $request->integer('pool_count'),
                generationMethod: PoolGenerationMethod::from(
                    $request->string('generation_method')
                ),
            )
        );
        return back()->with(
            'success',
            'Pools generated successfully.'
        );

        // return inertia('tournament/competition/pool-generate');
    }

    public function add(Tournament $tournament, TournamentCompetition $competition, TournamentPool $tournamentPool, Roster $roster, AddRosterToPool $action)
    {

        $action->handle($competition, $tournamentPool, $roster);
        return back()->with(['success' => "{$roster->name} has been added {$tournamentPool->name}"]);
    }

    public function remove(TournamentPool $pool, Roster $roster, RemoveRosterFromPool $action)
    {
        $action->handle($pool, $roster);

        return back();
    }

    public function move(Request $request, TournamentPool $pool, Roster $roster, MoveRosterBetweenPools $action)
    {
        $target = TournamentPool::findOrFail($request->integer('target_pool_id'));

        $action->handle($pool, $target, $roster);

        return back();
    }

    public function lock(Tournament $tournament, TournamentCompetition $competition, LockPools $action)
    {
        $action->handle($competition);
        
        return back()->with(['success' => 'Pools has been locked and now ready to generate match fixtures']);
    }

    public function destroy(TournamentCompetition $competition, DeletePools $action)
    {
        $action->handle($competition);
        return back();
    }

}
