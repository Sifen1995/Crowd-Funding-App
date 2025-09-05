<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $primaryKey = 'user_id';

    protected $fillable = [
        'email',
        'password',
        'full_name',
        'roles',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'roles' => 'array',
        'email_verified_at' => 'datetime',
    ];

    // Relationships
    public function campaigns()
    {
        return $this->hasMany(Campaign::class, 'creator_id');
    }

    public function contributions()
    {
        return $this->hasMany(Contribution::class, 'backer_id');
    }
}
