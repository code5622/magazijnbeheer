<?php

namespace Database\Seeders\Authorizatie;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Authorizatie\SubAfdeling;

class SubAfdelingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public static function build()
    {
        DB::table('subafdelingen')->truncate();
        SubAfdelingBuilder::factory();
    }
}

class SubAfdelingBuilder {
    private static $subafdelingen = [
        'Ingaande goederenontvangst',  
        'Uitgaan goederenontvangst', 
        'Teamleider', 
        'Assistent teamleider', 
        'Warehouse manager', 
        'Orderpicker', 
        'Orderverwerker', 
        'Inkoper', 
        'Voorraadbeheerder', 
        'Verkoper', 
        'Warehouse supervisor', 
        'Magazijnmedewerker', 
        'Reachtruckchauffeur', 
        'Heftruckchauffeur', 
        'Logistiek planner', 
        'Logistiek coördinator',
        'Medewerker ingaande goederenontvangst', 
        'Medewerker uitgaande goederenontvanst', 
        'medewerker bedrijfbureau',
        'Hoofd bedrijfsbureau', 
        'Logistiek medewerker retouren', 
        'Logistiek planner', 'Marketeer', 
        'Medewerker verkoop',
        'Medewerker debiteuren', 
        'Medewerker crediteuren', 
        'Financieel controller', 
        'Medewerker Financieel', 
        'Medewerker klantenservice', 
        'Medewerker webcare', 
        'Authorizatiebeheer' 
    ];     

    private static function get($index) {
        $subafdeling = self::$subafdelingen[$index];

        return [
            'naam' => $subafdeling
        ];    
    }
    
    public static function factory() {
        $last_index = count(self::$subafdelingen);

        for($index = 0; $index < $last_index; $index++) {
            $subafdeling = self::get($index);
            SubAfdeling::create($subafdeling); 
        }  
    }    
}