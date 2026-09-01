<?php 

namespace App\Domains\Tournament\Competition\Accreditation\Models;

use App\Domains\QrCode\Models\QrCode;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;

#[Fillable(['holder_type',
    'tournament_id', 'tournament_competition_id', 'roster_id', 'roster_player_id', 'roster_official_id', 'official_id',
    'player_id', 'card_number', 'qr_code', 'snapshot', 'issued_at', 'printed_at', 'revoked_at', 
    'generated_at', 'is_active'
    ])]
class TournamentAccreditation extends Model{
    use HasUuids;
    protected function casts(): array
    {
        return [
            'snapshot' => 'array',
            'issued_at' => 'datetime',
            'printed_at' => 'datetime',
            'revoked_at' => 'datetime',
            'is_active' => 'boolean',
            'generated_at' => 'datetime'
        ];
    }

    public function qrCode(): MorphOne
    {
        return $this->morphOne(QrCode::class, 'qrable');
    }
}