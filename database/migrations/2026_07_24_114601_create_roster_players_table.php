<?php

use App\Domains\Player\Models\Player;
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
        Schema::create('roster_players', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(Roster::class);
            $table->foreignUuidFor(Player::class);
            $table->unsignedBigInteger('jersey_number')->nullable();
            $table->boolean('is_captain')->default('false');
            $table->boolean('is_vice_captain')->default('false');

            $table->timestamps();

            $table->unique(['roster_id', 'player_id']);
            $table->unique(['roster_id', 'jersey_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roster_players');
    }
};
