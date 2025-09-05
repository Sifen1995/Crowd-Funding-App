<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        \App\Models\User::create([
            'email' => 'admin@crowdfunding.com',
            'password' => bcrypt('admin123'),
            'full_name' => 'Admin User',
            'roles' => ['admin', 'backer'],
        ]);

        // Create sample user
        \App\Models\User::create([
            'email' => 'user@example.com',
            'password' => bcrypt('password123'),
            'full_name' => 'Sample User',
            'roles' => ['backer'],
        ]);
    }
}
