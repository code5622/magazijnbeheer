<?php

namespace App\Models\Authorizatie;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bevoegdheid extends Model
{
    use HasFactory;

    protected $table = 'bevoegdheden';
    public $timestamps = false;
    protected $guarded = [];        
}
