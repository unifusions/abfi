<?php

use App\Domains\Organization\Models\Organization;
use App\Domains\Tournament\Models\Tournament;
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
        Schema::create('rosters', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(Tournament::class);
            $table->foreignUuidFor(Organization::class);
            $table->string('status')->default('draft');
            $table->dateTime('approved_at')->nullable();
            $table->dateTime('rejected_at')->nullable();
            $table->dateTime('submitted_at')->nullable();
            $table->foreignUuid('created_by')->constrained('users')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rosters');
    }
};
