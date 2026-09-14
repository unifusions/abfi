<?php

use App\Domains\Tournament\Roster\Models\Roster;
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
        Schema::create('roster_player_replacements', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(Roster::class);
            $table->string('type');
            $table->foreignUuid('replacing_id')->references('id')->on('players');
            $table->foreignUuid('replacement_id')->references('id')->on('players');
            $table->text('reason')->nullable();
            $table->text('remarks')->nullable();
            $table->foreignIdFor(User::class, 'replaced_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roster_player_replacements');
    }
};
