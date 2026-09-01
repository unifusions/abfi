<?php 

namespace   App\Domains\QrCode\Controllers;

use App\Domains\QrCode\Enums\QrcodeTypeEnum;
use App\Domains\QrCode\Models\QrCode;
use App\Http\Controllers\Controller;

class QrcodeVerificationController extends Controller {
    public function verify(string $token){
        $qrcode = QrCode::with('qrable')->where('token' , $token)
        ->firstOrFail();

        if(!$qrcode->isValid()){
            abort(410, 'This QR code is no longer valid');
        }

        return match ($qrcode->type) {
            QrcodeTypeEnum::ACCREDITATION->value => view(
                'qr.accreditation',
                [
                    'qrcode' => $qrcode,
                    'accreditation' => $qrcode->qrable,
                ]
            ),
    
            QrcodeTypeEnum::CERTIFICATE->value => view(
                'qr.certificate',
                [
                    'qrcode' => $qrcode,
                    'certificate' => $qrcode->qrable,
                ]
            ),
    
            default => abort(404),
        };
        
         
    }
}