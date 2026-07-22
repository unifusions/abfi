<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mediables', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->foreignUuid('media_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->uuidMorphs('mediable');

            /*
            model_type
            model_id
            */

            $table->string('collection')->default('default');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
            $table->unique([
                'media_id',
                'mediable_type',
                'mediable_id',
                'collection'
            ], 'mediables_unique');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mediables');
    }
};
