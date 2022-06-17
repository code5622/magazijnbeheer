<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InpakkenOrder extends Model
{
    use HasFactory;

    protected $table = 'inpakken_orders';
    const CREATED_AT = 'datum';    
    const UPDATED_AT = 'datum';
    protected $guarded = [];   
}
