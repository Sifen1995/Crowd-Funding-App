<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CampaignController extends Controller
{
    public function index(): JsonResponse
    {
        $campaigns = Campaign::paginate(10);
        return response()->json($campaigns);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'target_amount' => 'required|numeric|min:0',
            'image_url' => 'nullable|url',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'category_id' => 'required|exists:categories,category_id',
        ]);

        $campaign = Campaign::create(array_merge(
            $request->only([
                'title', 'description', 'target_amount', 'image_url',
                'start_date', 'end_date', 'category_id'
            ]),
            [
                'creator_id' => $request->user()->user_id,
                'status' => 'pending',
                'current_amount' => 0.00,
            ]
        ));

        // Return campaign without loading relationships to prevent memory issues
        return response()->json($campaign, 201);
    }

    public function show(string $id): JsonResponse
    {
        $campaign = Campaign::findOrFail($id);
        return response()->json($campaign);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $campaign = Campaign::findOrFail($id);
        
        // Check if user is the creator
        if ($campaign->creator_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|nullable|string',
            'target_amount' => 'sometimes|numeric|min:0',
            'image_url' => 'sometimes|nullable|url',
            'start_date' => 'sometimes|date',
            'end_date' => 'sometimes|date|after:start_date',
            'category_id' => 'sometimes|exists:categories,category_id',
        ]);

        $campaign->update($request->only([
            'title', 'description', 'target_amount', 'image_url',
            'start_date', 'end_date', 'category_id'
        ]));

        // Return campaign without loading relationships to prevent memory issues
        return response()->json($campaign);
    }

    public function destroy(Request $request, string $id): JsonResponse
    {
        $campaign = Campaign::findOrFail($id);
        
        // Check if user is the creator
        if ($campaign->creator_id !== $request->user()->user_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $campaign->delete();
        return response()->json(['message' => 'Campaign deleted successfully']);
    }
}
