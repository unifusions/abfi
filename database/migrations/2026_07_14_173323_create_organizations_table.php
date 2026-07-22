<?php

use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
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
        Schema::create('organizations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('president');
            $table->string('secretary');
            $table->string('contact_person')->nullable();
             $table->string('code')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
           $table->string('address_line_1')->nullable();
           $table->string('address_line_2')->nullable();
            $table->foreignUuidFor(Organization::class)->nullable();
            $table->foreignIdFor(State::class)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
