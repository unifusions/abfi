<?php

namespace App\Jobs;

use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use App\Domains\Tournament\Competition\Certificate\Services\CertificatePdfService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Support\Facades\Storage;
class GenerateCertificatePdf implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public int $timeout = 120;

    public function __construct(public $certificateId,)
    {
            
    }

    public function middleware(): array
    {
        return [
            new WithoutOverlapping("certificate-pdf:{$this->certificateId}"),
        ];
    }
    
    /**
     * Execute the job.
     */
    public function handle(CertificatePdfService $pdfService): void
    {
        $certificate = CompetitionCertificate::findOrFail(
            $this->certificateId
        );

        if (
            $certificate->pdf_path &&
            Storage::disk($certificate->pdf_disk)->exists(
                $certificate->pdf_path
            )
        ) {
            return;
        }

        $pdfService->generate($certificate);
    }
}
