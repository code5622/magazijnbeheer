<?php

namespace App\Models\Warehouse\Inrichting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductEigenschap extends Model
{
    use HasFactory;

    protected $table = 'producteigenschappen';
    public $timestamps = false;
    protected $guarded = [];       
}
