<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $primaryKey = 'category_id';

    protected $fillable = [
        'name',
    ];

    // Relationships
    public function campaigns()
    {
        return $this->hasMany(Campaign::class);
    }
}
