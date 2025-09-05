<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reward;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class RewardController extends Controller
{
    public function index(): JsonResponse
    {
        $rewards = Reward::paginate(10);
        return response()->json($rewards);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'campaign_id' => 'required|exists:campaigns,campaign_id',
            'title' => 'required|string|max:100',
            'description' => 'nullable|string',
            'minimum_contribution_amount' => 'required|numeric|min:0',
            'quantity_available' => 'nullable|integer|min:0',
            'delivery_date' => 'nullable|date|after:today',
        ]);

        // Check if user is the campaign creator
        $campaign = Campaign::findOrFail($request->campaign_id);
        if ($campaign->creator_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $reward = Reward::create($request->only([
            'campaign_id', 'title', 'description', 
            'minimum_contribution_amount', 'quantity_available', 'delivery_date'
        ]));

        return response()->json($reward, 201);
    }

    public function show(string $id): JsonResponse
    {
        $reward = Reward::findOrFail($id);
        return response()->json($reward);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $reward = Reward::findOrFail($id);
        
        // Check if user is the campaign creator
        $campaign = Campaign::find($reward->campaign_id);
        if ($campaign->creator_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'title' => 'sometimes|string|max:100',
            'description' => 'sometimes|nullable|string',
            'minimum_contribution_amount' => 'sometimes|numeric|min:0',
            'quantity_available' => 'sometimes|nullable|integer|min:0',
            'delivery_date' => 'sometimes|nullable|date|after:today',
        ]);

        $reward->update($request->only([
            'title', 'description', 'minimum_contribution_amount', 
            'quantity_available', 'delivery_date'
        ]));

        return response()->json($reward);
    }

    public function destroy(Request $request, string $id): JsonResponse
    {
        $reward = Reward::findOrFail($id);
        
        // Check if user is the campaign creator
        $campaign = Campaign::find($reward->campaign_id);
        if ($campaign->creator_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $reward->delete();
        return response()->json(['message' => 'Reward deleted successfully']);
    }
}
