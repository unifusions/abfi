<?php

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Models\TournamentCompetition;
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
        Schema::create('pool_standings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(TournamentPool::class);
            $table->foreignUuidFor(TournamentCompetition::class);
            $table->foreignUuidFor(Roster::class);
            $table->unsignedTinyInteger('position')->default(0);
            $table->unsignedTinyInteger('played')->default(0);
            $table->unsignedTinyInteger('won')->default(0);
            $table->unsignedTinyInteger('lost')->default(0);
            $table->unsignedTinyInteger('draw')->default(0);
            $table->unsignedSmallInteger('points')->default(0);
            $table->unsignedSmallInteger('runs_for')->default(0);
            $table->unsignedSmallInteger('runs_against')->default(0);
            $table->integer('run_difference')->default(0);
            $table->timestamps();


            $table->unique(['tournament_pool_id', 'roster_id']);

            $table->index(['tournament_competition_id']);
            $table->index(['tournament_pool_id', 'position']);
            $table->index(['points']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pool_standings');
    }
};
