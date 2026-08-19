<?php 

namespace App\Domains\Tournament\Competition\Certificate\Controllers;

use App\Domains\Tournament\Competition\Certificate\Services\CertificatePdfService;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;

class RosterCertificateController extends Controller{
    public function __construct(protected CertificatePdfService $service){}

    public function downloadSingle(){}
    public function downloadForRoster(Roster $roster){
        return $this->service->downloadRoster($roster->id);
    }
}