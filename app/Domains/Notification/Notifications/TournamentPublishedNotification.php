<?php

namespace App\Domains\Notification\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TournamentPublishedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public string $tournamentName,
        public string $registrationUrl,
        public ?string $closingDate = null,
    ) {
        $this->afterCommit();
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Tournament Published - ' . $this->tournamentName)
            ->greeting('Hello ' . ($notifiable->name ?? 'there') . ',')
            ->line('A new tournament has been published by ABFI.')
            ->line('Tournament: ' . $this->tournamentName)
            ->when(
                $this->closingDate,
                fn ($mail) => $mail->line('Registration closes on: ' . $this->closingDate)
            )
            ->action('View Tournament', $this->registrationUrl)
            ->line('Please log in to your ABFI account for further details.')
            ->salutation('Regards, ABFI Team');
    }
}