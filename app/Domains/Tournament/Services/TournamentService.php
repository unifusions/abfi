<?php

namespace App\Domains\Tournament\Services;

use App\Domains\Tournament\Actions\CancelTournament;
use App\Domains\Tournament\Actions\CompleteTournament;
use App\Domains\Tournament\Actions\CreateAndPublishTournament;
use App\Domains\Tournament\Actions\CreateTournament;
use App\Domains\Tournament\Actions\PublishTournament;
use App\Domains\Tournament\Actions\UpdateTournament;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Models\Tournament;

class TournamentService
{
    public function __construct(
        protected CreateTournament $createTournament,
        protected CreateAndPublishTournament $createAndPublishTournament,
        protected UpdateTournament $updateTournament,
        protected PublishTournament $publishTournament,
        protected CancelTournament $cancelTournament,
        protected CompleteTournament $completeTournament
    ) {
    }

    public function create(array $data): Tournament
    {
        $data['created_by'] = auth()->id();


        $tournament = $this->createTournament->handle($data);

        foreach ($data['competition_type'] as $competition) {

            $tournament->competitions()->create([
                'name' => ucfirst($competition),
                'competition_type' => $competition,
            ]);

        }
        // $tournament->categories()->sync($data['category_ids']);
// $tournament->ageGroups()->sync($data['age_group_ids']);

        return $tournament;
    }

    public function createAndPublish(array $data): Tournament
    {
        $data['created_by'] = auth()->id();

        $tournament = $this->createAndPublishTournament->handle($data);


        foreach ($data['competition_type'] as $competition) {

            $tournament->competitions()->create([
                'name' => ucfirst($competition),
                'competition_type' => $competition,
                'phase' => CompetitionPhaseEnum::REGISTRATION_OPEN
            ]);

        }
        // $tournament = $this->createTournament->handle($data);

        // $tournament->categories()->sync($data['category_ids']);
// $tournament->ageGroups()->sync($data['age_group_ids']);

        return $tournament;
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
}