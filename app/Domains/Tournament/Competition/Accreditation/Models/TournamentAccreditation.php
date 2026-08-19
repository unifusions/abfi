<?php 

namespace App\Domains\Tournament\Competition\Accreditation\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

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
        ];
    }
}