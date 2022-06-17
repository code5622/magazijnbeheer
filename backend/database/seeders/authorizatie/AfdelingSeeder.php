<?php

namespace Database\Seeders\Authorizatie;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Authorizatie\Afdeling;

class AfdelingSeeder
{
    public static function build()
    {
        DB::table('afdelingen')->truncate();  
        AfdelingBuilder::factory();
    }    
}

class AfdelingBuilder {
    private static $afdelingen = [
        'Warehouse',
        'Inkoop',
        'Verkoop',
        'Voorraadbeheer',
        'Goederenontvangst',
        'Financieel',
        'Klantenservice',
        'HRM',            
    ];    

    private static function get($index) {
        $afdeling = self::$afdelingen[$index];

        return [
            'naam' => $afdeling
        ];    
    }
    
    public static function factory() {
        $last_index = count(self::$afdelingen);

        for($index = 0; $index < $last_index; $index++) {
            $afdeling = self::get($index);
            Afdeling::create($afdeling); 
        }   
    }    
}
