<?php

use App\Domains\Organization\Models\Organization;
 
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rosters', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->nullable();
            $table->foreignUuidFor(TournamentCompetition::class)->constrained()->cascadeOnDelete();
            $table->foreignUuidFor(Organization::class)->constrained()->cascadeOnDelete();
            $table->string('status')->default(RosterStatusEnum::DRAFT->value);
            $table->timestamp('submitted_at')->nullable();
            $table->foreignId('created_by')->constrained('users')->restrictOnDelete();

            $table->text('remarks')->nullable();
            $table->softDeletes();

            $table->timestamps();
            $table->unique([
                'tournament_competition_id',
                'organization_id',
            ], 'roster_competition_organization_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rosters');
    }
};
