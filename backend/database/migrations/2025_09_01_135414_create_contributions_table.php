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
        Schema::create('contributions', function (Blueprint $table) {
            $table->id('contribution_id');
            $table->unsignedBigInteger('backer_id')->nullable();
            $table->unsignedBigInteger('campaign_id');
            $table->unsignedBigInteger('reward_id')->nullable();
            $table->decimal('amount', 10, 2);
            $table->enum('payment_status', ['pending', 'completed', 'failed']);
            $table->timestamp('contribution_date')->useCurrent();
            $table->timestamps();
            
            $table->foreign('backer_id')->references('user_id')->on('users')->onDelete('set null');
            $table->foreign('campaign_id')->references('campaign_id')->on('campaigns')->onDelete('cascade');
            $table->foreign('reward_id')->references('reward_id')->on('rewards')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contributions');
    }
};
