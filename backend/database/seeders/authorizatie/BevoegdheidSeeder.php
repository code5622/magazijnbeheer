<?php

namespace Database\Seeders\Authorizatie;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Authorizatie\Bevoegdheid;

class BevoegdheidSeeder extends Seeder
{
    public static function build()
    {
        DB::table('bevoegdheden')->truncate();  
        BevoegdheidBuilder::factory();
    }    
}

class BevoegdheidBuilder {

    private static $bevoegdheden = [
        'Lezen', 
        'Schrijven', 
        'Wijzigen', 
        'Verwijderen', 
    ];   

    private static function get($index) {
        return [
            'naam' => self::$bevoegdheden[$index]
        ];    
    }
    
    public static function factory() {
        $last_index = count(self::$bevoegdheden);

        for($index = 0; $index < $last_index; $index++) {
            $bevoegdheid = self::get($index);
            Bevoegdheid::create($bevoegdheid); 
        }         
    }
}
