<?php

namespace App\Models\UI;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filter extends Model
{
    use HasFactory;

    protected $table = 'filters_interface';
    public $timestamps = false;
    protected $guarded = [];       
}
