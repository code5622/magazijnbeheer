<?php

namespace App\Models\Warehouse\Inrichting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMetadata extends Model
{
    use HasFactory;

    protected $table = 'product_metadata';
    public $timestamps = false;
    protected $guarded = [];      
}
