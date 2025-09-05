<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $primaryKey = 'campaign_id';

    protected $fillable = [
        'creator_id',
        'category_id',
        'title',
        'description',
        'target_amount',
        'current_amount',
        'image_url',
        'start_date',
        'end_date',
        'status',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'target_amount' => 'decimal:2',
        'current_amount' => 'decimal:2',
    ];

    // Relationships
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function rewards()
    {
        return $this->hasMany(Reward::class);
    }

    public function contributions()
    {
        return $this->hasMany(Contribution::class);
    }
}
