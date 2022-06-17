<?php

namespace App\Http\Controllers\Seeders\Verkoop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Verkoop\Klant;
use Carbon\Carbon;

class KlantSeederController extends Controller
{
    public function factory () {
        DB::table('klanten')->truncate();  

        $datum = Carbon::create('2021', '03', '29');
        $voornaam = "karin";
        $achternaam = 'van Langen';
        $adres = 'Spoorstraat 6';
        $postcode = '4402 GH';
        //$plaats = $plaatsen[$plaats_index];
        $land = 'Nederland';
        $verzendadres = 'Spoorstraat 6';
        $verzendpostcode = '4402 GH';
        $verzendplaats = 'Amsterdam';
        $verzendland = 'Nederland';
        $email = 'karinvanlangen@kpn.com';
        $telefoon = '0524-480942';
    
        for($index = 0; $index < 20; $index++) {
            $klant = [
                'datum' => $this->datum(),
                'voornaam' => $voornaam, 
                'achternaam' => $achternaam, 
                'adres' => $adres, 
                'postcode' => $postcode, 
                'plaats' => $this->plaats(), 
                'land' => $land,
                'verzendadres' => $verzendadres,
                'verzendpostcode' => $verzendpostcode,
                'verzendplaats' => $verzendplaats,
                'verzendland' => $verzendland,
                'email' => $email,
                'telefoon' => $telefoon                
            ];

            Klant::create($klant); 
        }
    }

    public function plaats() {
        $plaatsen = [
            'Amsterdam',
            'Rotterdam',
            'Amersfoort',
            'Eindhoven',
            'Maastricht'
        ];
    
        $plaats_rnd = rand(1, 100);
        
        if($plaats_rnd < 50) {
            return $plaatsen[0];
        } elseif($plaats_rnd < 85) {
            return $plaatsen[1];         
        } elseif($plaats_rnd < 90) {
            return $plaatsen[2];          
        } elseif($plaats_rnd < 95) {
            return $plaatsen[3];            
        } elseif($plaats_rnd < 100) {
            return $plaatsen[4];          
        }      
    }

    public function datum() {
        $year = rand(2011, 2021);
        $month = rand(1, 12);
        $day = rand(1, 26);
    
        $datum = Carbon::create($year, $month, $day);

        return $datum;   
    }    
}
