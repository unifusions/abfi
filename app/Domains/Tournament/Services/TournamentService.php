<?php

namespace App\Domains\Tournament\Services;

use App\Domains\Tournament\Actions\CancelTournament;
use App\Domains\Tournament\Actions\CompleteTournament;
use App\Domains\Tournament\Actions\CreateAndPublishTournament;
use App\Domains\Tournament\Actions\CreateTournament;
use App\Domains\Tournament\Actions\PublishTournament;
use App\Domains\Tournament\Actions\UpdateTournament;
use App\Domains\Tournament\Actions\UpdateTournamentSequence;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Models\Tournament;
use Illuminate\Support\Facades\DB;

class TournamentService
{
    public function __construct(
        protected CreateTournament $createTournament,
        protected CreateAndPublishTournament $createAndPublishTournament,
        protected UpdateTournament $updateTournament,
        protected PublishTournament $publishTournament,
        protected CancelTournament $cancelTournament,
        protected CompleteTournament $completeTournament,
        protected UpdateTournamentSequence $updateSequence
    ) {}

    public function create(array $data): Tournament
    {
        $data['created_by'] = auth()->id();

        return $this->createTransaction($data);

        // $tournament->categories()->sync($data['category_ids']);
        // $tournament->ageGroups()->sync($data['age_group_ids']);


    }

    public function createAndPublish(array $data): Tournament
    {
        $data['created_by'] = auth()->id();
        return $this->createTransaction($data, true);



        // $tournament = $this->createTournament->handle($data);

        // $tournament->categories()->sync($data['category_ids']);
        // $tournament->ageGroups()->sync($data['age_group_ids']);


    }

    public function update(
        Tournament $tournament,
        array $data
    ): Tournament {
        $data['updated_by'] = auth()->id();
        return $this->updateTournament->handle($tournament, $data);
    }

    public function publish(Tournament $tournament): Tournament
    {
        $data['updated_by'] = auth()->id();
        return $this->publishTournament->handle($tournament);
    }

    public function cancel(Tournament $tournament): Tournament
    {
        $data['updated_by'] = auth()->id();

        return $this->cancelTournament->handle($tournament);
    }

    public function complete(Tournament $tournament): Tournament
    {
        $data['updated_by'] = auth()->id();
        return $this->completeTournament->handle($tournament);
    }

    protected function createTransaction($data, $publish = false)
    {
        return DB::transaction(function () use ($data, $publish) {

            $tournament = $publish ? $this->createAndPublishTournament->handle($data) : $this->createTournament->handle($data);

            $this->updateSequence->handle($tournament->tournament_type);
            foreach ($data['competition_type'] as $competition) {

                $tournament->competitions()->create([
                    'name' => ucfirst($competition),
                    'competition_type' => $competition,
                    'phase' =>        $publish ? CompetitionPhaseEnum::REGISTRATION_OPEN      : null,

                ]);
            }
            return $tournament;
        });
    }
}
