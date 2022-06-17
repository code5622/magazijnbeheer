<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerkoopPrijs extends Model
{
    use HasFactory;

    protected $table = 'verkoopprijzen';
    const CREATED_AT = 'datum';    
    const UPDATED_AT = 'datum';
    protected $guarded = [];
}
