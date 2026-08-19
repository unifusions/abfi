<?php

namespace App\Domains\Tournament\Competition\Certificate\Controllers;

use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use App\Domains\Tournament\Competition\Certificate\Services\CertificatePdfService;
use App\Domains\Tournament\Competition\Certificate\Services\CompetitionCertificateService;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
 
use App\Http\Controllers\Controller;

class CertificateController extends Controller
{
    public function __construct(
        protected CertificatePdfService $pdfService,
        protected CompetitionCertificateService $service
    ) {
    }

    public function generateAllCertificates(Tournament $tournament, TournamentCompetition  $competition)
    {
        $competition->update([
            'phase' => CompetitionPhaseEnum::PROCESS_CERTIFICATES
            ]);
        $this->service->generateAllCertificates($competition);
        return back()->with(['success' => 'All Certificates has been generated ssuccessfully. Generate PDF for final versions']);
    }
    public function generateParticipantCertificates(Tournament $tournament, TournamentCompetition $competition)
    {

        $this->service->generateParticipantCertificates($competition);
        return back()->with(['success' => 'All Certificates for participants has been generated ssuccessfully. Generate PDF for final versions']);

    }
    public function preview(Tournament $tournament, TournamentCompetition $competition, CompetitionCertificate $certificate)
    {

        return $this->pdfService->preview($certificate);

    }

    
}