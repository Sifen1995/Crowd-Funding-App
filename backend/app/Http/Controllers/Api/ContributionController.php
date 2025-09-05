<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contribution;
use App\Models\Campaign;
use App\Models\Reward;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContributionController extends Controller
{
    public function index(): JsonResponse
    {
        $contributions = Contribution::with(['backer', 'campaign', 'reward'])->paginate(10);
        return response()->json($contributions);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'campaign_id' => 'required|exists:campaigns,campaign_id',
            'reward_id' => 'nullable|exists:rewards,reward_id',
            'amount' => 'required|numeric|min:0',
        ]);

        // Check if campaign is active
        $campaign = Campaign::findOrFail($request->campaign_id);
        if ($campaign->status !== 'active') {
            return response()->json(['message' => 'Campaign is not active'], 400);
        }

        // Check if reward amount requirement is met
        if ($request->reward_id) {
            $reward = Reward::findOrFail($request->reward_id);
            if ($request->amount < $reward->minimum_contribution_amount) {
                return response()->json([
                    'message' => 'Contribution amount must meet reward requirement'
                ], 400);
            }
        }

        $contribution = Contribution::create([
            'backer_id' => $request->user()->user_id,
            'campaign_id' => $request->campaign_id,
            'reward_id' => $request->reward_id,
            'amount' => $request->amount,
            'payment_status' => 'pending',
        ]);

        // Update campaign current amount
        $campaign->increment('current_amount', $request->amount);

        return response()->json($contribution->load(['backer', 'campaign', 'reward']), 201);
    }

    public function show(string $id): JsonResponse
    {
        $contribution = Contribution::with(['backer', 'campaign', 'reward'])->findOrFail($id);
        return response()->json($contribution);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $contribution = Contribution::findOrFail($id);
        
        // Only allow updating payment status
        $request->validate([
            'payment_status' => 'required|in:pending,completed,failed',
        ]);

        $contribution->update($request->only(['payment_status']));
        
        return response()->json($contribution->load(['backer', 'campaign', 'reward']));
    }

    public function destroy(Request $request, string $id): JsonResponse
    {
        $contribution = Contribution::findOrFail($id);
        
        // Check if user is the contributor
        if ($contribution->backer_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Decrease campaign current amount
        $campaign = Campaign::find($contribution->campaign_id);
        if ($campaign) {
            $campaign->decrement('current_amount', $contribution->amount);
        }

        $contribution->delete();
        return response()->json(['message' => 'Contribution deleted successfully']);
    }
}
