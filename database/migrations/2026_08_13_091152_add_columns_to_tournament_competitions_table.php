<?php

use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
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
           $table->string('phase')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tournament_competitions', function (Blueprint $table) {
            $table->dropColumn('phase');
        });
    }
};
