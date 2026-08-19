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
        Schema::table('roster_players', function (Blueprint $table) {
            $table->boolean('is_approved')->default(false);
            $table->boolean('is_request_resubmission')->default(false);
            $table->json('snapshot')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('roster_players', function (Blueprint $table) {

            $table->dropColumn('is_approved');
            $table->dropColumn('is_request_resubmission');
            $table->dropColumn('snapshot');
        });
    }
};
