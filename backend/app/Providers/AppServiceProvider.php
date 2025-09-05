<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Set memory limit to prevent memory exhaustion
        ini_set('memory_limit', '256M');
        ini_set('max_execution_time', 300);
    }
}
