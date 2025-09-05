<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'full_name' => 'required|string|max:100',
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'full_name' => $request->full_name,
            'roles' => ['backer'],
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => [
                'user_id' => $user->user_id,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'roles' => $user->roles,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ],
            'token' => $token,
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => [
                'user_id' => $user->user_id,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'roles' => $user->roles,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ],
            'token' => $token,
        ], 200);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }
}
