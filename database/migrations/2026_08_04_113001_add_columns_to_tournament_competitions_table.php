<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tournament_competitions', function (Blueprint $table) {
            $table->timestamp('idcard_generated_at')->nullable();
            $table->timestamp('certificate_generated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tournament_competitions', function (Blueprint $table) {
            $table->dropColumn('idcard_generated_at');
            $table->dropColumn('certificate_generated_at');

        });
    }
};
