<?php

namespace App\Models\Warehouse\Inrichting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Warehouse\Inrichting\PicklocatieType;

class Picklocatie extends Model
{
    use HasFactory;

    protected $table = 'picklocaties';
    public $timestamps = false;
    protected $guarded = [];   
    
    public function picklocatie_type() {
        return $this->belongsTo(PicklocatieType::class, 'picklocatie_type_id');
    }
}
