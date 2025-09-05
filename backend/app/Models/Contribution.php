<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contribution extends Model
{
    protected $primaryKey = 'contribution_id';

    protected $fillable = [
        'backer_id',
        'campaign_id',
        'reward_id',
        'amount',
        'payment_status',
        'contribution_date',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'contribution_date' => 'datetime',
    ];

    // Relationships
    public function backer()
    {
        return $this->belongsTo(User::class, 'backer_id');
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function reward()
    {
        return $this->belongsTo(Reward::class);
    }
}
