<?php

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
        Schema::create('roster_status_histories', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuidFor(Roster::class);
            $table->string('from_status')->nullable();
            $table->string('to_status')->nullable();
            $table->string('remarks')->nullable();
            $table->foreignUuid('changed_by')->constrained('users')->nullable();
            $table->timestamp('created_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roster_status_histories');
    }
};
