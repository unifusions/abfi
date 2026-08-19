<?php

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
        Schema::table('tournament_competitions', function (Blueprint $table) {
            $table->foreignUuid('winner_roster_id')->nullable();
            $table->foreignId('winner_state_id')->nullable();


            $table->foreignUuid('runner_up_roster_id')->nullable();
            $table->foreignId('runner_up_state_id')->nullable();
            
            $table->foreignUuid('third_place_roster_id')->nullable();
            $table->foreignId('third_place_state_id')->nullable();

             $table->foreignUuid('third_place_2_roster_id')->nullable();
            $table->foreignId('third_place_2_state_id')->nullable();

            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tournament_competitions', function (Blueprint $table) {
            $table->dropColumn('winner_roster_id');
            $table->dropColumn('winner_state_id');
            $table->dropColumn('runner_up_roster_id');
            $table->dropColumn('runner_up_state_id');
            $table->dropColumn('third_place_roster_id');
            $table->dropColumn('third_place_state_id');
            $table->dropColumn('third_place_2_roster_id');
            $table->dropColumn('third_place_2_state_id');
        });
    }
};
