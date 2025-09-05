<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::paginate(10);
        return response()->json($users);
    }

    public function show(string $id): JsonResponse
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $user = User::findOrFail($id);
        
        $request->validate([
            'full_name' => 'sometimes|string|max:100',
            'email' => 'sometimes|email|unique:users,email,' . $id . ',user_id',
        ]);

        $user->update($request->only(['full_name', 'email']));
        
        return response()->json($user);
    }

    public function destroy(string $id): JsonResponse
    {
        $user = User::findOrFail($id);
        $user->delete();
        
        return response()->json(['message' => 'User deleted successfully']);
    }
}
