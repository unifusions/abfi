<?php

use App\Domains\Compliance\Models\State;
use App\Domains\Organization\Models\Organization;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('officials', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('official_code')->unique();
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

            $table->enum('marital_status', ['unmarried', 'married' , 'widowed']);
   
            $table->enum('type', ['state', 'tournament' , 'other']);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_verified')->default(false);
            $table->timestamp('verified_at')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users');
            $table->foreignId('created_by')->nullable()->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');

            $table->string('account_bank_name')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_ifsc_code')->nullable();

            $table->timestamps();
            $table->softDeletes();

        });



    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('officials');
    }
};
