<?php

use App\Domains\Organization\Models\Organization;
use App\Domains\Player\Models\Player;
 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Models\Roster;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('competition_certificates', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(TournamentCompetition::class)->constrained()->cascadeOnDelete();
            $table->foreignUuidFor(Organization::class)->nullable();
            $table->foreignUuidFor(Roster::class)->nullable();
            $table->uuid('recipient_id')->nullable();
            $table->string('recipient_type');

            $table->string('type');
            $table->string('recipient_name');
            $table->string('competition_name');
            $table->string('category_name')->nullable();
            $table->string('gender')->nullable();
            $table->json('snapshot')->nullable();
            $table->string('certificate_number')->unique();
            $table->string('verification_code')->unique();
            $table->string('pdf_path')->nullable();
            $table->string('pdf_disk')->default('public');
            $table->timestamp('generated_at')->nullable();
            $table->timestamp('issued_at')->nullable();
            $table->timestamps();
            $table->unique([
                'tournament_competition_id',
                'recipient_id',
                'type',
            ]);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competition_certificates');
    }
};
