<?php

namespace App\Domains\Tournament\Actions;

use App\Domains\Notification\Notifications\TournamentPublishedNotification;
use App\Domains\Notification\Services\NotificationService;
use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Tournament\Models\Tournament;
use Illuminate\Support\Str;

class CreateAndPublishTournament
{
    public function handle(array $attributes): Tournament
    {
        $attributes['slug'] = Str::slug($attributes['name']);

        $attributes['published_at'] =  now();
        $attributes['status'] = TournamentStatus::PUBLISHED;

        $tournament = Tournament::create($attributes);
       
        app(NotificationService::class)->send(
        recipients: ['siyamkumar@gmail.com'],
        notification: new TournamentPublishedNotification(
            tournamentName: $tournament->name,
            registrationUrl: route('tournaments.show', $tournament),
            closingDate: $tournament->registration_close_at?->format('d M Y'),
        )
    );
    

        return $tournament;;
    }
}