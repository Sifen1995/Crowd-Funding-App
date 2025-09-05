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
        Schema::create('rewards', function (Blueprint $table) {
            $table->id('reward_id');
            $table->unsignedBigInteger('campaign_id');
            $table->string('title', 100);
            $table->text('description')->nullable();
            $table->decimal('minimum_contribution_amount', 10, 2);
            $table->integer('quantity_available')->nullable();
            $table->date('delivery_date')->nullable();
            $table->timestamps();
            
            $table->foreign('campaign_id')->references('campaign_id')->on('campaigns')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rewards');
    }
};
