<?php

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournament_fixtures', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(TournamentCompetition::class);
            $table->foreignUuidFor(TournamentPool::class)->nullable();
            $table->unsignedBigInteger('round')->nullable();
            $table->string('match_number')->nullable();
            $table->foreignUuid('home_roster_id')->constrained('rosters')->nullable();
            $table->foreignUuid('away_roster_id')->constrained('rosters')->nullable();
            $table->string('status')->nullable();
            $table->foreignUuid('winner_roster_id')->nullable()->constrained('rosters');
            $table->unsignedSmallInteger('home_score')->nullable();
            $table->unsignedSmallInteger('away_score')->nullable();
            $table->string('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournament_fixtures');
    }
};
