<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Verkoop\Klant;
use Database\Seeders\Generators\Voornaam;
use Database\Seeders\Generators\Achternaam;
use Database\Seeders\Generators\KlantData;
use Database\Seeders\Generators\Land;

class KlantSeeder extends Seeder
{
    public function run() {
        DB::table('klanten')->truncate();  
    
        for($index = 0; $index < 20; $index++) {
            $klant = KlantBuilder::build();
            Klant::create($klant); 
        }
    }
}

class KlantBuilder {
    //private static $voornaam;
    private static $achternaam;
    private static $email;
    private static $datum;
    private static $provincie;
    private static $plaats;
   
    static function build() {      
        $voornaam = Voornaam::random_voornaam(Land::NEDERLAND);
        $achternaam = Achternaam::random_achternaam(Land::NEDERLAND);
        $klantdata = Klantdata::random_klantdata();
        self::random_datum();
        
        $klant = [
            'datum' => self::$datum,
            'voornaam' => $voornaam, 
            'achternaam' => $achternaam, 
            'adres' => 'Spoorstraat 6', 
            'postcode' => '4402 GH', 
            'plaats' => $klantdata->plaats, 
            'provincie' => $klantdata->provincie,
            'land' => 'Nederland',
            'verzendadres' => 'Spoorstraat 6',
            'verzendpostcode' => '4402 GH',
            'verzendplaats' => 'Amsterdam',
            'verzendprovincie' => 'Noord-Holland',
            'verzendland' => 'Nederland',
            'email' => self::random_email($voornaam, $achternaam),
            'telefoon' => '0524-480942'               
        ]; 
        
        return $klant;        
    }    

    private static function random_voornaam() {
        $rnd = rand(0, 199);        
        return self::$voornamen[$rnd];
    }

    private static function random_email($voornaam, $achternaam) {
        $emailadres = ['@kpn.com', '@ziggo.nl', '@outlook.com', '@gmail.com'];

        $rnd = rand(1, 2); 
        if ($rnd == 1) {
            $email = strtolower($voornaam) . '.' . strtolower(str_replace(' ', '', $achternaam));
        } elseif ($rnd == 2) {
            $email = self::left(strtolower($voornaam), 1) . '.' . strtolower(str_replace(' ', '', $achternaam));
        }

        $rnd = rand(0, 3);
        $email = $email . $emailadres[$rnd]; 
        
        return $email;
    }
    
    private static function random_achternaam() {
        $rnd = rand(0, 117);
        return self::$achternamen[$rnd];
    }     

    private static function set_voornaam($voornaam) {
        self::$voornaam = $voornaam;
    }  

    private static function set_achternaam($achternaam) {
        self::$achternaam = $achternaam;
    } 

    private static function set_email($email) {
        self::$email = $email;
    }  

    private static function set_datum($datum) {
        self::$datum = $datum;
    }  
    
    private static function left($str, $length) {
        return substr($str, 0, $length);
    }  
   
    private static function right($str, $length) {
        return substr($str, -$length);
    }   

    private static function random_datum() {
        $year = rand(2011, 2021);
        $month = rand(1, 12);
        $day = rand(1, 26);
    
        $datum = Carbon::create($year, $month, $day);

        self::$datum = $datum;   
    }     
}
