<?php
// app/Console/Commands/CleanupTemporaryMedia.php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Domains\Media\Services\MediaService;

class CleanupTemporaryMedia extends Command
{
    protected $signature = 'media:cleanup';

    protected $description = 'Delete temporary uploaded media';

    public function handle(MediaService $mediaService): int
    {
        $mediaService->cleanupTemporary();

        $this->info('Temporary media cleaned.');

        return self::SUCCESS;
    }
}