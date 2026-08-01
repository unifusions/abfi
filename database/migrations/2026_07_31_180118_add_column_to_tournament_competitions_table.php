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
            $table->unsignedTinyInteger('pool_count')->nullable();

$table->timestamp('pools_generated_at')->nullable();

$table->timestamp('pools_locked_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tournament_competitions', function (Blueprint $table) {
           $table->dropColumn('pool_count');
           $table->dropColumn('pools_generated_at');
           $table->dropColumn('pools_locked_at');
        });
    }
};
