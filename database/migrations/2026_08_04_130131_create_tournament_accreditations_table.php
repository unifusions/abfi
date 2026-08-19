<?php

use App\Domains\Official\Models\Official;
use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Models\Tournament;
 
use App\Domains\Tournament\Roster\Models\Roster;
use App\Domains\Tournament\Roster\Models\RosterOfficial;
use App\Domains\Tournament\Roster\Models\RosterPlayer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournament_accreditations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('holder_type')->nullable();
            $table->foreignUuidFor(Tournament::class);
            $table->foreignUuidFor(TournamentCompetition::class);
            $table->foreignUuidFor(Roster::class);

            $table->foreignUuidFor(RosterPlayer::class)->nullable();
            $table->foreignUuidFor(Player::class)->nullable();

            $table->foreignUuidFor(RosterOfficial::class)->nullable();
            $table->foreignUuidFor(Official::class)->nullable();

            $table->string('card_number')->nullable();
            $table->string('qr_token')->nullable();
            $table->json('snapshot');

            $table->timestamp('issued_at')->nullable();
            $table->timestamp('printed_at')->nullable();
            $table->timestamp('revoked_at')->nullable();
            $table->boolean('is_active')->default(true);

            $table->dateTime('generated_at');
            $table->timestamps();
            $table->softDeletes();

            $table->index('tournament_id');
            $table->index('competition_id');
            $table->index('roster_id');
            $table->index('roster_player_id');
            $table->index('player_id');
            $table->index('official_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournament_accreditations');
    }
};
