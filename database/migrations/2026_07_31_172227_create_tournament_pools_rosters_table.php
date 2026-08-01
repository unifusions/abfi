<?php

use App\Domains\Tournament\Competition\Engine\Pool\Models\TournamentPool;
use App\Domains\Tournament\Roster\Models\Roster;
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
        Schema::create('tournament_pools_rosters', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(TournamentPool::class);
            $table->foreignUuidFor(Roster::class);
$table->unsignedSmallInteger('seed')->nullable();
$table->unsignedSmallInteger('position')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournament_pools_rosters');
    }
};
