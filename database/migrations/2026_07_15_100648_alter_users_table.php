<?php

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
        Schema::table('users', function (Blueprint $table){
            $table->foreignUuidFor(Organization::class)->nullable();
            $table->string('designation')->nullable();
            $table->boolean('is_super_admin')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table){
            $table->dropColumn('organization_id');
            $table->dropColumn('is_super_admin');
            $table->dropColumn('designation');
        });
    }
};
