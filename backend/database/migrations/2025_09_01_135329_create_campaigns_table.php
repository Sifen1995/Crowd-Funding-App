<?php

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
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id('campaign_id');
            $table->unsignedBigInteger('creator_id');
            $table->unsignedBigInteger('category_id');
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->decimal('target_amount', 10, 2);
            $table->decimal('current_amount', 10, 2)->default(0.00);
            $table->text('image_url')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['active', 'pending', 'completed', 'cancelled']);
            $table->timestamps();
            
            $table->foreign('creator_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->foreign('category_id')->references('category_id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaigns');
    }
};
