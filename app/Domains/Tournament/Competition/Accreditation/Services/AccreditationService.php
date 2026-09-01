<?php

namespace App\Domains\Tournament\Competition\Accreditation\Services;

use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\QrCode\Enums\QrcodeTypeEnum;
use App\Domains\Tournament\Competition\Accreditation\Models\TournamentAccreditation;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;

use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use DB;
use Str;

class AccreditationService
{

    public function issueForCompetition(TournamentCompetition $competition)
    {
        return DB::transaction(function () use ($competition) {

            $accreditations = collect();

            $competition->approvedRosters()
                ->with([
                    'players.player',
                    'officials',
                ])
                ->each(function ($roster) use ($competition, &$accreditations) {
                    foreach ($roster->players as $rosterPlayer) {
                        $accreditations->push(
                            $this->issuePlayer(
                                $competition,
                                $roster,
                                $rosterPlayer
                            )
                        );
                    }

                    foreach ($roster->officials as $official) {
                        $accreditations->push(
                            $this->issueOfficial(
                                $competition,
                                $roster,
                                $official
                            )
                        );
                    }
                    $competition->phase = CompetitionPhaseEnum::SCHEDULED;
                    $competition->save();
                });


            return $accreditations;
        });
    }

    protected function issuePlayer(
        TournamentCompetition $competition,
        $roster,
        $rosterPlayer
    ): TournamentAccreditation {

      
        $accreditation = TournamentAccreditation::create([
            'holder_type' => 'player',

            'tournament_id' => $competition->tournament_id,
            'tournament_competition_id' => $competition->id,
            'roster_id' => $roster->id,

            'roster_player_id' => $rosterPlayer->id,
            'player_id' => $rosterPlayer->player_id,

            'card_number' => $this->generateCardNumber(),
            'qr_token' =>  Str::uuid(),

            'snapshot' => $this->buildPlayerSnapshot(
                $competition,
                $roster,
                $rosterPlayer
            ),

            'generated_at' => now(),
            'is_active' => true,
        ]);

        $accreditation->qrCode()->create([
            'type' => QrcodeTypeEnum::ACCREDITATION->value,
            'is_active' => true,
        ]);

        return $accreditation;
    }

    protected function issueOfficial(
        TournamentCompetition $competition,
        $roster,
        $rosterOfficial
    ): TournamentAccreditation {
       
        $accreditation = TournamentAccreditation::create([
            'holder_type' => 'official',

            'tournament_id' => $competition->tournament_id,
            'tournament_competition_id' => $competition->id,
            'roster_id' => $roster->id,
            'roster_official_id' => $rosterOfficial->id,
            'official_id' => $rosterOfficial->official->id,
            'card_number' => $this->generateCardNumber(),

            'snapshot' => $this->buildOfficialSnapshot(
                $competition,
                $roster,
                $rosterOfficial
            ),

            'generated_at' => now(),
            'is_active' => true,
        ]);

        $accreditation->qrCode()->create([
            'type' => QrcodeTypeEnum::ACCREDITATION->value,
            'is_active' => true,
        ]);

        return $accreditation;
    }
    protected function buildPlayerSnapshot(
        TournamentCompetition $competition,
        $roster,
        $rosterPlayer
    ): array {
        $player = $rosterPlayer->player;

        return [
            'holder_type' => 'player',

            'player' => [
                'id' => $player->id,
                'name' => implode(' ', [$player->first_name, $player->middle_name, $player->last_name]),
                'date_of_birth' => $player->dob?->format('Y-m-d'),
                'gender' => $player->gender,
                'photo_path' => $player->getMediaUrl(MediaCollectionEnum::PROFILE),
            ],

            'association' => [
                'id' => $roster->organization_id,
                'name' => $roster->organization?->name,
                'state_name' => $roster->organization?->state?->name,
            ],

            'tournament' => [
                'id' => $competition->tournament_id,
                'name' => $competition->tournament?->name,
            ],

            'competition' => [
                'id' => $competition->id,
                'name' => $competition->name,
                'category' => $competition->category?->name,
            ],

            'roster' => [
                'id' => $roster->id,
                'name' => $roster->name,
            ],

            'jersey_number' => $rosterPlayer->jersey_number,

            'role' => 'Player',
        ];
    }

    protected function buildOfficialSnapshot(
        TournamentCompetition $competition,
        $roster,
        $rosterOfficial
    ): array {
        $official = $rosterOfficial->official;
        return [
            'holder_type' => 'official',

            'official' => [
                'id' => $official->id,
                'name' => implode(' ', [$official->first_name, $official->middle_name, $official->last_name]),
                'photo_path' => $official->getMediaUrl(MediaCollectionEnum::PROFILE),
            ],

            'association' => [
                'id' => $roster->organization_id,
                'name' => $roster->organization?->name,
                'state_name' => $roster->organization?->state?->name,
            ],

            'tournament' => [
                'id' => $competition->tournament_id,
                'name' => $competition->tournament?->name,
            ],

            'competition' => [
                'id' => $competition->id,
                'name' => $competition->name,
                'category' => $competition->category?->name,
            ],

            'roster' => [
                'id' => $roster->id,
                'name' => $roster->name,
            ],

            'role' => $official->type,
        ];
    }
    protected function generateCardNumber(): string
    {
        // We can finalize the ABFI card-number format later.
        return 'ABFI-' . now()->year . '-' . strtoupper(
            Str::random(8)
        );
    }
}
