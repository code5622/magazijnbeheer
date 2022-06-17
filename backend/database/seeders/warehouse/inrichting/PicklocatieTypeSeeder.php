<?php

namespace Database\Seeders\Warehouse\Inrichting;

use Illuminate\Database\Seeder;
use App\Models\Warehouse\Inrichting\PicklocatieType;
use Illuminate\Support\Facades\DB;

class PicklocatieTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public static function build()
    {
        DB::table('picklocatie_types')->truncate();  
        PicklocatieTypeBuilder::factory();
    }
}

class PicklocatieTypeBuilder {
    private static $picklocatie_types = [
        ['type' => 'D1', 'hoogte' => 41, 'breedte' => 31, 'diepte' => 98, 'starthoogte' => 22],
        ['type' => 'D2', 'hoogte' => 30, 'breedte' => 14, 'diepte' => 98, 'starthoogte' => 74],
        ['type' => 'D3', 'hoogte' => 41, 'breedte' => 31, 'diepte' => 98, 'starthoogte' => 112],
        ['type' => 'D4', 'hoogte' => 30, 'breedte' => 14, 'diepte' => 98, 'starthoogte' => 164],
        ['type' => 'D5', 'hoogte' => 30, 'breedte' => 14, 'diepte' => 98, 'starthoogte' => 202],
        ['type' => 'B1', 'hoogte' => 120, 'breedte' => 89, 'diepte' => 110, 'starthoogte' => 0],
        ['type' => 'B2', 'hoogte' => 120, 'breedte' => 89, 'diepte' => 110, 'starthoogte' => 132],
        ['type' => 'A', 'hoogte' => 222, 'breedte' => 89, 'diepte' => 110, 'starthoogte' => 0],
        ['type' => 'C1', 'hoogte' => 60, 'breedte' => 43, 'diepte' => 110, 'starthoogte' => 22],
        ['type' => 'C2', 'hoogte' => 60, 'breedte' => 43, 'diepte' => 110, 'starthoogte' => 92],
        ['type' => 'C3', 'hoogte' => 60, 'breedte' => 43, 'diepte' => 110, 'starthoogte' => 162],   
    ];

    public static function get($index) {
        $picklocatie_type = [
            'type' => self::$picklocatie_types[$index]['type'],
            'hoogte' => self::$picklocatie_types[$index]['hoogte'],
            'breedte' => self::$picklocatie_types[$index]['breedte'],
            'diepte' => self::$picklocatie_types[$index]['diepte'],
            'starthoogte' => self::$picklocatie_types[$index]['starthoogte'],                                                                                
        ];
  
        return $picklocatie_type;
    }

    public static function factory() {
        $last_index = count(self::$picklocatie_types);

        for ($index=0; $index<$last_index; $index++) {
            $picklocatie_type = self::get($index);
            PicklocatieType::create($picklocatie_type);       
        }
    }
}
