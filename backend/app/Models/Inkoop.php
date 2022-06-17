<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inkoop extends Model
{
    use HasFactory;

    protected $table = 'inkopen';
    public $timestamps = false;
    protected $guarded = [];    
}
