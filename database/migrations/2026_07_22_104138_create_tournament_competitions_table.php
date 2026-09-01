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
            $table->unsignedTinyInteger('pool_count')->nullable();

            $table->timestamp('pools_generated_at')->nullable();
$table->timestamp('pools_locked_at')->nullable();
$table->timestamp('fixture_generated_at')->nullable();
$table->timestamp('fixture_locked_at')->nullable();
$table->timestamp('idcard_generated_at')->nullable();
$table->timestamp('certificate_generated_at')->nullable();
$table->string('phase')->nullable();
$table->foreignUuid('winner_roster_id')->nullable();
$table->foreignId('winner_state_id')->nullable();


$table->foreignUuid('runner_up_roster_id')->nullable();
$table->foreignId('runner_up_state_id')->nullable();

$table->foreignUuid('third_place_roster_id')->nullable();
$table->foreignId('third_place_state_id')->nullable();

 $table->foreignUuid('third_place_2_roster_id')->nullable();
$table->foreignId('third_place_2_state_id')->nullable();


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
