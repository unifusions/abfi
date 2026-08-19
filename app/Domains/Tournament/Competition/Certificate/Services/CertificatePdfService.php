<?php

namespace App\Domains\Tournament\Competition\Certificate\Services;


use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class CertificatePdfService
{

    public function preview(CompetitionCertificate $certificate)
    {
        return view('certificates.competition', [
            'tournament' => $certificate->competition->tournament,
            'certificate' => $certificate,
            'achievement' => $certificate->type->achievement(),
            'year' => $certificate->issued_at?->year ?? now()->year,
            'background' => $this->background($certificate),
        ]);
    }

    public function download(CompetitionCertificate $certificate)
    {

        return Pdf::loadView('certificates.competition', [
            'certificate' => $certificate,
        ])->setPaper('a4', 'landscape')
            ->download($certificate->certificate_number . '.pdf');
    }

    public function downloadRoster(string $rosterId)
    {
        $certificates = CompetitionCertificate::query()
            ->where('roster_id', $rosterId)
            ->with([
        'competition.tournament.organization',
        'competition.tournament.venue',
    ])
            ->orderBy('recipient_name')
            ->get();

        return $this->pdf($certificates)
            ->stream("roster-{$rosterId}-certificates.pdf");
    }

    protected function pdf($certificates)
    {
        return Pdf::loadView('certificates.multiple', [
            'certificates' => $certificates,
        ])->setPaper('a4', 'landscape');
    }


    public function generate(
        CompetitionCertificate $certificate
    ): CompetitionCertificate {


        $type = $certificate->type;
        $pdf = Pdf::loadView('certificates.competition', [
            'certificate' => $certificate,
            'achievement' => $type->achievement(),
            'year' => $certificate->issued_at?->year ?? now()->year,
            'background' => $this->background($certificate),
            'qrCode' => $this->qrCode($certificate),

        ])->setPaper('a4', 'landscape');
        $path = sprintf(
            'certificates/%s/%s.pdf',
            $certificate->tournament_competition_id,
            $certificate->id
        );

        Storage::disk($certificate->pdf_disk ?? 'public')->put(
            $path,
            $pdf->output()
        );

        $certificate->update([
            'pdf_path' => $path,
        ]);

        return $certificate->refresh();
    }

    protected function background(
        CompetitionCertificate $certificate
    ): string {
        // We'll define template/background selection here.
        return public_path('certificates/default.png');
    }

    protected function qrCode(
        CompetitionCertificate $certificate
    ): string {
        // We'll implement QR generation here.
        return '';
    }
}