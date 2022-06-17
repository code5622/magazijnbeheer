<?php

namespace App\Models\Verkoop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Klant extends Model
{
    use HasFactory;

    protected $table = 'klanten';
    public $timestamps = false;
    protected $guarded = [];     
}
