<?php

namespace App\Domains\Tournament\Competition\Certificate\Models;

use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Competition\Certificate\Enums\CertificateTypeEnum;
 
 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CompetitionCertificate extends Model
{
    use HasUuids;

    protected $table = 'competition_certificates';

    protected $fillable = [
        'tournament_competition_id',
        'roster_id',
        'recipient_id',
        'recipient_type',
        'type', 'snapshot',
        'recipient_name',
        'competition_name',
        'category_name',
        'gender',
        'certificate_number',
        'verification_code',
        'pdf_disk',
        'pdf_path',
        'issued_at',
        
    ];

    protected function casts(): array
    {
        return [
            'type' => CertificateTypeEnum::class,
            'issued_at' => 'datetime',
            'snapshot' => 'array',
        ];
    }

    public function competition(): BelongsTo
    {
        return $this->belongsTo(
            TournamentCompetition::class,
            'tournament_competition_id'
        );
    }

    public function roster(): BelongsTo
    {
        return $this->belongsTo(Roster::class);
    }
public function recipient(): MorphTo
{
    return $this->morphTo();
}
   
}