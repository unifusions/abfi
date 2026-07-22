<?php

use App\Domains\Compliance\Models\BaseballPosition;
use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Domains\Player\Models\Player;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('players', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('player_code')->unique();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('father_name')->nullable();
            $table->foreignUuidFor(Organization::class)->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->date('dob');
            $table->string('blood_group', 5)->nullable();
            $table->string('aadhar_no')->unique();
            $table->string('passport')->nullable();
            $table->string('email')->nullable();
            $table->string('phone', 20)->nullable();

            $table->string('emergency_contact_phone', 20)->nullable();

            $table->foreignIdFor(State::class);
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('pincode', 10)->nullable();

            // $table->enum('throws', ['left', 'right', 'switch'])->nullable();
            // $table->enum('bats', ['left', 'right', 'switch'])->nullable();
            // $table->boolean('is_pitcher')->default(false);

            $table->boolean('is_active')->default(true);
            $table->boolean('is_verified')->default(false);
            $table->timestamp('verified_at')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');

            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('baseball_positions', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('code')->unique();
            $table->unsignedInteger('display_order')->default(0);
            $table->timestamps();
        });


        Schema::create('player_positions', function (Blueprint $table) {

           
            $table->foreignUuidFor(Player::class)->constrained()->cascadeOnDelete();
            $table->foreignUuidFor(BaseballPosition::class)->constrained();
            $table->boolean('primary')->default(false);

            $table->timestamps();

        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_positions');
        Schema::dropIfExists('baseball_positions');
        Schema::dropIfExists('players');

    }
};
