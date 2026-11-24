<?php

namespace App\Domains\Notification\Services;

use App\Domains\Notification\Events\NotificationRequested;
use Illuminate\Notifications\Notification;

class NotificationService
{
    public function send(
        iterable $recipients,
        Notification $notification
    ): void {
        $recipients = collect($recipients)
            ->filter(fn ($recipient) => method_exists($recipient, 'notify'))
            ->unique(fn ($recipient) => get_class($recipient) . ':' . $recipient->getKey())
            ->values()
            ->all();

        if (empty($recipients)) {
            return;
        }

        event(new NotificationRequested(
            recipients: $recipients,
            notification: $notification,
        ));
    }
}