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
            'background' => asset('images/certificate-bg.jpg'),
        ]);
    }

    public function download(CompetitionCertificate $certificate)
    {

        return Pdf::loadView('certificates.competition', [
            'certificate' => $certificate,
        ])->setPaper('a4', 'landscape')
            ->download($certificate->certificate_number . '.pdf');
    }

    public function downloadSingle(CompetitionCertificate $certificate)
    {
        if (
            !$certificate->pdf_path || !Storage::disk($certificate->pdf_disk)->exists($certificate->pdf_path)
        ) {
            $this->generate($certificate);
            $certificate->refresh();
              return back()->with(['error' => 'Error downloading']);
        }

        $path = Storage::disk($certificate->pdf_disk)
            ->path($certificate->pdf_path);

        return response()->download(
            $path,
            "{$certificate->certificate_number}.pdf",
            [
                'Content-Type' => 'application/pdf',
            ]
        );
      
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
            'tournament' => $certificate->competition->tournament,
            'achievement' => $type->achievement(),
            'year' => $certificate->issued_at?->year ?? now()->year,
            'background' => public_path('images/certificate-bg.jpg'),
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
            'generated_at' => now(),
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