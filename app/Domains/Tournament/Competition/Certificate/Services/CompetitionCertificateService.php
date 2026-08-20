<?php

namespace App\Domains\Tournament\Competition\Certificate\Services;


use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Competition\Certificate\Enums\CertificateTypeEnum;
use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;

use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Models\Roster;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;


class CompetitionCertificateService
{
    public function __construct(
        protected CertificateNumberGenerator $numberGenerator,
        protected CertificateVerificationCodeGenerator $verificationCodeGenerator,
    ) {
    }

    public function generateAllCertificates(
        TournamentCompetition $competition
    ): Collection {
        return DB::transaction(function () use ($competition) {

            $certificates = new Collection();

            // Participants
            $certificates = $certificates->merge(
                $this->generateParticipantCertificates($competition)
            );

            // Winner / Runner-up / 3rd Place
            $results = $this->getFinalResults($competition);

            $resultTypes = [
                'winner' => CertificateTypeEnum::WINNER,
                'runner_up' => CertificateTypeEnum::RUNNER_UP,
            ];

            foreach ($resultTypes as $result => $type) {
                $roster = $results[$result];

                foreach ($this->recipients($roster) as $recipient) {
                    $certificates->push(
                        $this->create(
                            competition: $competition,
                            roster: $roster,
                            recipient: $recipient['person'],
                            recipientType: $recipient['type'],

                            type: $type,
                        )
                    );
                }
            }

            // Two 3rd-place rosters
            foreach ($results['third_places'] as $roster) {
                foreach ($this->recipients($roster) as $recipient) {
                    $certificates->push(
                        $this->create(
                            competition: $competition,
                            roster: $roster,
                            recipient: $recipient['person'],
                            recipientType: $recipient['type'],

                            type: CertificateTypeEnum::THIRD_PLACE,
                        )
                    );
                }
            }

            return $certificates;
        });
    }

    public function generateParticipantCertificates(
        TournamentCompetition $competition
    ): Collection {
        return DB::transaction(function () use ($competition) {
            $poolRosterIds = $competition->fixtures()
                ->where('fixture_type', FixtureTypeEnum::POOL)
                ->where('status', FixtureStatusEnum::COMPLETED)
                ->get()
                ->flatMap(fn($fixture) => [
                    $fixture->home_roster_id,
                    $fixture->away_roster_id,
                ])
                ->filter()
                ->unique();

            /*
             * QF losers receive participant certificates.
             */
            $qfLosers = $competition->fixtures()
                ->where('stage', FixtureStageEnum::QUARTER_FINAL)
                ->where('status', FixtureStatusEnum::COMPLETED)
                ->get()
                ->map(
                    fn($fixture) =>
                    $fixture->home_roster_id === $fixture->winner_roster_id
                    ? $fixture->away_roster_id
                    : $fixture->home_roster_id
                )
                ->filter()
                ->unique();

            /*
             * SF losers receive 3rd-place certificates,
             * therefore they must NOT receive participant certificates.
             */
            $sfLosers = $competition->fixtures()
                ->where('stage', FixtureStageEnum::SEMI_FINAL)
                ->where('status', FixtureStatusEnum::COMPLETED)
                ->get()
                ->map(
                    fn($fixture) =>
                    $fixture->home_roster_id === $fixture->winner_roster_id
                    ? $fixture->away_roster_id
                    : $fixture->home_roster_id
                )
                ->filter()
                ->unique();

            /*
             * Finalists receive Winner / Runner-up certificates,
             * therefore they must NOT receive participant certificates.
             */
            $finalists = $competition->fixtures()
                ->where('stage', FixtureStageEnum::FINAL)
                ->where('status', FixtureStatusEnum::COMPLETED)
                ->get()
                ->flatMap(fn($fixture) => [
                    $fixture->home_roster_id,
                    $fixture->away_roster_id,
                ])
                ->filter()
                ->unique();

            /*
             * Pool participants who progressed to QF are initially
             * included in $poolRosterIds.
             *
             * Remove SF losers and finalists.
             *
             * Then add QF losers back explicitly.
             */
            $excludedRosterIds = $sfLosers
                ->merge($finalists)
                ->unique();

            $participantRosterIds = $poolRosterIds
                ->reject(
                    fn($id) => $excludedRosterIds->contains($id)
                )
                ->merge($qfLosers)
                ->unique()
                ->values();

            $rosters = Roster::query()
                ->whereIn('id', $participantRosterIds)
                ->with('players')
                ->get();

            $certificates = new Collection();


            foreach ($rosters as $roster) {

                foreach ($this->recipients($roster) as $recipient) {

                    $certificates->push(
                        $this->create(
                            competition: $competition,
                            roster: $roster,
                            recipient: $recipient['person'],
                            recipientType: $recipient['type'],
                            type: CertificateTypeEnum::PARTICIPANT,
                        )
                    );
                }
            }

            return $certificates;
        });
    }


    protected function recipients(Roster $roster): Collection
    {
        return $roster->players
            ->map(fn($rosterPlayer) => [
                'person' => $rosterPlayer->player,
                'type' => 'player',
            ])
            ->merge(
                $roster->officials->map(fn($rosterOfficial) => [
                    'person' => $rosterOfficial->official,
                    'type' => 'official',
                ])
            );
    }

    public function create(
        TournamentCompetition $competition,
        Roster $roster,
        Model $recipient,
        $recipientType,
        CertificateTypeEnum $type,
    ): CompetitionCertificate {

        $recipientName = $this->recipientName($recipient);

        $certificate = CompetitionCertificate::firstOrCreate(
            [
                'tournament_competition_id' => $competition->id,
                'recipient_type' => $recipient::class,
                'recipient_id' => $recipient->id,
                'type' => $type,
            ],
            [
                'roster_id' => $roster->id,
                'organization_id' => $roster->organization->id,

                'recipient_name' => $recipientName,

                'snapshot' => [
                    'recipient' => [
                        'type' => $recipient::class,
                        'id' => $recipient->id,
                        'name' => $recipientName,
                        'role' => $recipientType === 'player' ? 'Player' : $recipient->type,
                        'dob' => $recipient?->dob?->format('d/m/Y')
                    ],
                    'roster' => [
                        'id' => $roster->id,
                        'name' => $roster->name,

                    ],
                    'organization' => [
                        'id' => $roster->organization->id,
                        'name' => $roster->organization->name,
                        'state' => $roster->organization->state->name
                    ],
                    'competition' => [
                        'id' => $competition->id,
                        'name' => $competition->name,
                        'category' => $competition->competition_type,
                        'gender' => $competition->gender(),
                    ],
                    'certificate_type' => $type->value,
                ],


                'competition_name' => $competition->name,
                'category_name' => $competition->competition_type,
                'gender' => $competition->gender(),

                'certificate_number' =>
                    $this->numberGenerator->generate(),

                'verification_code' =>
                    $this->verificationCodeGenerator->generate(),

                'issued_at' => now(),
                'pdf_disk' => 'public',
            ]
        );

        $pdfService = app(CertificatePdfService::class);
        if (
            !$certificate->pdf_path ||
            !Storage::disk($certificate->pdf_disk)->exists($certificate->pdf_path)
        ) {
            $pdfService->generate($certificate);
        }
        return $certificate->refresh();
    }

    protected function recipientName(Model $recipient): string
    {
        return trim(implode(' ', array_filter([
            $recipient->first_name ?? null,
            $recipient->middle_name ?? null,
            $recipient->last_name ?? null,
        ])));
    }

    public function getFinalResults(
        TournamentCompetition $competition
    ): array {
        $final = $competition->fixtures()
            ->where('stage', FixtureStageEnum::FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->firstOrFail();

        $winner = $final->winner_roster_id;

        $runnerUp = $final->home_roster_id === $winner
            ? $final->away_roster_id
            : $final->home_roster_id;

        $thirdPlaces = $competition->fixtures()
            ->where('stage', FixtureStageEnum::SEMI_FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get()
            ->map(
                fn($fixture) =>
                $fixture->home_roster_id === $fixture->winner_roster_id
                ? $fixture->away_roster_id
                : $fixture->home_roster_id
            )
            ->filter()
            ->values();


        $rosters = Roster::query()
            ->whereIn(
                'id',
                collect([
                    $winner,
                    $runnerUp,
                    ...$thirdPlaces,
                ])->unique()
            )
            ->with(['players', 'organization.state', 'certificates'])
            ->get()
            ->keyBy('id');


        return [
            'winner' => $rosters->get($winner),
            'runner_up' => $rosters->get($runnerUp),
            'third_places' => $thirdPlaces
                ->map(fn($id) => $rosters->get($id))
                ->filter()
                ->values(),
        ];
    }
}