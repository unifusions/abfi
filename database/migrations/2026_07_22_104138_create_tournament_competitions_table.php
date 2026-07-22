<?php

use App\Domains\Tournament\Models\Tournament;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournament_competitions', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->foreignUuidFor(Tournament::class);
             

            $table->string('name')->nullable();

            $table->string('competition_type', 20);

            $table->boolean('is_active')->default(true);

            $table->timestamps();
            $table->softDeletes();

            $table->unique([
                'tournament_id',
                'competition_type',
            ], 'tournament_competition_type_unique');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournament_competitions');
    }
};
