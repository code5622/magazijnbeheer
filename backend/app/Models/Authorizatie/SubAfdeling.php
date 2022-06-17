<?php

namespace App\Models\Authorizatie;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubAfdeling extends Model
{
    use HasFactory;

    protected $table = 'subafdelingen';
    public $timestamps = false;
    protected $guarded = [];           
}
