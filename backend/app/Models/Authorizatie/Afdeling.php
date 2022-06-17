<?php

namespace App\Models\Authorizatie;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Afdeling extends Model
{
    use HasFactory;

    protected $table = 'afdelingen';
    public $timestamps = false;
    protected $guarded = [];        
}
