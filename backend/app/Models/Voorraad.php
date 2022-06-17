<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voorraad extends Model
{
    use HasFactory;

    protected $table = 'voorraad';
    const CREATED_AT = 'datum';    
    const UPDATED_AT = 'datum';
    protected $guarded = [];    
}
