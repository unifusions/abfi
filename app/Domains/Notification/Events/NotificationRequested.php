<?php

namespace App\Domains\Notification\Events;

use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Events\ShouldDispatchAfterCommit;

class NotificationRequested implements ShouldDispatchAfterCommit
{
    public function __construct(
        public array $recipients,
        public Notification $notification,
    ) {}
}