<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Technology',
            'Art & Design',
            'Music',
            'Film & Video',
            'Games',
            'Publishing',
            'Food & Craft',
            'Fashion & Wearables',
            'Health & Fitness',
            'Education',
            'Environment',
            'Community',
            'Science',
            'Sports',
            'Travel',
        ];

        foreach ($categories as $categoryName) {
            \App\Models\Category::create([
                'name' => $categoryName,
            ]);
        }
    }
}
