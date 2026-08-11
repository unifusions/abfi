<?php

use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tournament_fixtures', function (Blueprint $table) {
            $table->string('stage')->nullable();
            $table->string('fixture_type')->nullable()->default(FixtureTypeEnum::POOL);
            $table->foreignUuid('source_home_fixture_id')->nullable();
            $table->foreignUuid('source_away_fixture_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tournament_fixtures', function (Blueprint $table) {
            $table->dropColumn('stage');
            $table->dropColumn('fixture_type');

            $table->dropColumn('source_home_fixture_id');
            $table->dropColumn('source_away_fixture_id');
        });
    }
};
