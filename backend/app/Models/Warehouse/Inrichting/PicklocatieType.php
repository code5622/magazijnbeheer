<?php

namespace App\Models\Warehouse\Inrichting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Warehouse\Inrichting\Picklocatie;

class PicklocatieType extends Model
{
    use HasFactory;

    protected $table = 'picklocatie_types';
    public $timestamps = false;
    protected $guarded = [];   
    
    public function picklocatie() {
        return $this->hasMany(Picklocatie::class);
    }
}
