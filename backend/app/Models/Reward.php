<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    protected $primaryKey = 'reward_id';

    protected $fillable = [
        'campaign_id',
        'title',
        'description',
        'minimum_contribution_amount',
        'quantity_available',
        'delivery_date',
    ];

    protected $casts = [
        'delivery_date' => 'date',
        'minimum_contribution_amount' => 'decimal:2',
    ];

    // Relationships
    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function contributions()
    {
        return $this->hasMany(Contribution::class);
    }
}
