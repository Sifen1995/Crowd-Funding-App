<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:50|unique:categories,name',
        ]);

        $category = Category::create($request->only(['name']));
        return response()->json($category, 201);
    }

    public function show(string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        
        $request->validate([
            'name' => 'required|string|max:50|unique:categories,name,' . $id . ',category_id',
        ]);

        $category->update($request->only(['name']));
        return response()->json($category);
    }

    public function destroy(string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
