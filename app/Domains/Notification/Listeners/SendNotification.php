<?php

namespace App\Domains\Notification\Listeners;

use App\Domains\Notification\Events\NotificationRequested;

class SendNotification
{
    public function handle(NotificationRequested $event): void
    {
        foreach ($event->recipients as $recipient) {
            $recipient->notify($event->notification);
        }
    }
}