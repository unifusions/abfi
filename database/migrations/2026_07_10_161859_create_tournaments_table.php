<?php

use App\Domains\Compliance\Models\Category;
use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Enums\TournamentFormatEnum;
use App\Domains\Tournament\Enums\TournamentStatus;
use App\Domains\Venue\Models\Venue;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->text('description')->nullable();
            $table->foreignUuidFor(Category::class)->nullable();
            $table->foreignUuidFor(Organization::class);
            $table->foreignUuidFor(Venue::class);
            $table->string('organizer')->nullable();
            $table->string('season')->nullable();

            
            $table->string('competition_format')->default(TournamentFormatEnum::POOL_PLAY->value);

            $table->string('status')->default(TournamentStatus::DRAFT->value);

            $table->timestamp('registration_open_at')->nullable();

            $table->timestamp('registration_close_at')->nullable();
            $table->date('starts_at');

            $table->date('ends_at');
            $table->timestamp('published_at')->nullable();

            $table->foreignId('created_by')->nullable();
            $table->foreignId('updated_by')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
