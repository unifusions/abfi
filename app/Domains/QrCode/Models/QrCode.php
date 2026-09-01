<?php 

namespace App\Domains\QrCode\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Str;


#[Fillable('token', 'type', 'qrable_id','qrable_type', 'expires_at', 'is_active')]
class QrCode extends Model{

    use HasUuids;
    protected $casts = [
        'expires_at' => 'datetime',
        'is_active' => 'boolean'
    ];

 
    protected static function booted(): void
    {
        static::creating(function (QRCode $qrCode) {
            $qrCode->id ??= Str::uuid();
            $qrCode->token ??= Str::uuid();
        });
    }

    public function qrable(): MorphTo
    {
        return $this->morphTo();
    }

    public function url(): string
    {
        return route('qr.verify', $this->token);
    }
 
    public function isValid(): bool
    {
        if (!$this->is_active) {
            return false;
        }

        if ($this->expires_at && $this->expires_at->isPast()) {
            return false;
        }

        return true;
    }
}