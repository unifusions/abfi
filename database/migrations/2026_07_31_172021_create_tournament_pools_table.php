<?php

 
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
        Schema::create('tournament_pools', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(TournamentCompetition::class);
            $table->string('name')->nullable();
            $table->string('code', 10)->nullable();
            $table->integer('display_order')->nullable();
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournament_pools');
    }
};
