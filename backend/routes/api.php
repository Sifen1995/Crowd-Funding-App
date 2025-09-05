<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\Api\RewardController;
use App\Http\Controllers\Api\ContributionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);
    
    // User routes
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    
    // Campaign routes
    Route::post('/campaigns', [CampaignController::class, 'store']);
    Route::put('/campaigns/{id}', [CampaignController::class, 'update']);
    Route::delete('/campaigns/{id}', [CampaignController::class, 'destroy']);
    
    // Reward routes
    Route::post('/rewards', [RewardController::class, 'store']);
    Route::put('/rewards/{id}', [RewardController::class, 'update']);
    Route::delete('/rewards/{id}', [RewardController::class, 'destroy']);
    
    // Contribution routes
    Route::post('/contributions', [ContributionController::class, 'store']);
    Route::put('/contributions/{id}', [ContributionController::class, 'update']);
    Route::delete('/contributions/{id}', [ContributionController::class, 'destroy']);
});

// Public read routes (no authentication required)
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::get('/campaigns', [CampaignController::class, 'index']);
Route::get('/campaigns/{id}', [CampaignController::class, 'show']);
Route::get('/rewards', [RewardController::class, 'index']);
Route::get('/rewards/{id}', [RewardController::class, 'show']);
Route::get('/contributions', [ContributionController::class, 'index']);
Route::get('/contributions/{id}', [ContributionController::class, 'show']);
