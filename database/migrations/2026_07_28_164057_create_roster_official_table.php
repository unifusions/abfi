<?php

use App\Domains\Official\Models\Official;
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
        Schema::create('roster_officials', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(Roster::class);
            $table->foreignUuidFor(Official::class);
            $table->enum('type', ['manager', 'coach', 'other']);
            $table->timestamps();
            $table->unique(['roster_id', 'official_id']);
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roster_official');
    }
};
