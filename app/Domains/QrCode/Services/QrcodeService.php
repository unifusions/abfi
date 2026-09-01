<?php 
namespace App\Domains\QrCode\Services;

use App\Domains\QrCode\Enums\QrcodeTypeEnum;
use App\Domains\QrCode\Models\QrCode;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Writer\SvgWriter;
use Illuminate\Database\Eloquent\Model;

class QrcodeService{

    public function create(Model $model, QrcodeTypeEnum $type, string $expiresAt) : QrCode{
        $type = $type instanceof QrcodeTypeEnum ? $type->value : $type;
        
        return QrCode::create([
            'type' => $type,
            'qrable_type' => $model->getMorphClass(),
            'qrable_id' => $model->getKey(),
            'expires_at' => $expiresAt,
            'is_active' => true,

        ]);

    }

    public function getOrCreate(Model $model, QrcodeTypeEnum $type){
        $type = $type instanceof QrcodeTypeEnum ? $type->value : $type;
   
        return QrCode::firstOrCreate([
            'type' => $type,
            'qrable_type' => $model->getMorphClass(),
            'qrable_id' => $model->getKey(),
        ], ['is_active' => true]);
    }

    public function svg(QRCode $qrCode): string
    {
        return (new Builder(
            writer: new SvgWriter(),
            data: $qrCode->url(),
            size: 300,
            margin: 10,
        ))->build()->getString();
    }

    public function png(QRCode $qrCode): string
    { return (new Builder(
        writer: new PngWriter(),
        data: $qrCode->url(),
        size: 300,
        margin: 10,
    ))->build()->getString();
    }

    public function deactivate(QRCode $qrCode): void
    {
        $qrCode->update([
            'is_active' => false,
        ]);
    }

    public function regenerate(QRCode $qrCode): QRCode
    {
        $qrCode->update([
            'token' => \Illuminate\Support\Str::uuid(),
            'is_active' => true,
        ]);

        return $qrCode->fresh();
    }

}