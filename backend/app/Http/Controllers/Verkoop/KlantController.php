<?php

namespace App\Http\Controllers\Verkoop;

use App\Http\Controllers\Controller;
use App\Models\Verkoop\Klant;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class KlantController extends Controller
{
    public function klanten() {
        $klanten = Klant::paginate(20);

        return $klanten;
    }

    public function klant($klant_id) {
        $klant = Klant::find($klant_id);

        return $klant;
    }     

    public function create(Request $request) {      
        $klant = [
            'datum' => Carbon::create(2021, 04, 02),
            'voornaam' => $request['voornaam'],
            'achternaam' => $request['achternaam'],            
            'adres' => $request['adres'],            
            'postcode' => $request['postcode'],
            'plaats' => $request['plaats'],     
            'provincie' => $request['provincie'],       
            'land' => $request['land'],
            'verzendadres' => $request['verzendadres'],
            'verzendpostcode' => $request['verzendpostcode'],
            'verzendplaats' => $request['verzendplaats'],
            'verzendprovincie' => $request['verzendprovincie'],               
            'verzendland' => $request['verzendland'],
            'telefoon' => $request['telefoon'],
            'email' => $request['email'], 
        ];

        $klant_response = Klant::create($klant);

        return response($klant_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $klant_id) {
        $klant = [
            'datum' => Carbon::create(2021, 04, 02),
            'voornaam' => $request['voornaam'],
            'achternaam' => $request['achternaam'],            
            'adres' => $request['adres'],            
            'postcode' => $request['postcode'],
            'plaats' => $request['plaats'],     
            'provincie' => $request['provincie'],       
            'land' => $request['land'],
            'verzendadres' => $request['verzendadres'],
            'verzendpostcode' => $request['verzendpostcode'],
            'verzendplaats' => $request['verzendplaats'],
            'verzendprovincie' => $request['verzendprovincie'],               
            'verzendland' => $request['verzendland'],
            'telefoon' => $request['telefoon'],
            'email' => $request['email'], 
        ];

        Klant::find($klant_id)
             ->update($klant); 
    }      

    public function remove($klant_id) {
        Klant::destroy($klant_id);
    }  

    public function per_provincie() {
        // SELECT provincie, count(provincie) as count
        // FROM `klanten` 
        // GROUP BY provincie
        // ORDER BY count DESC       
         
        // $provincie_aantal_klanten = DB::table('klanten')
        //                               ->select('provincie', DB::raw('provincie, count(*) as count'))                     
        //                               ->groupby('provincie')
        //                               ->orderBy('count', 'desc') 
        //                               ->get(); 

        $result = Klant::orderBy('count', 'desc')
                        ->select(DB::raw('provincie, count(*) as count'))
                        ->groupby('provincie')
                        ->get();

        return $result;                              
    }

    public function per_plaats_provincie($provincie) {
        // SELECT provincie, plaats, count(provincie) as count
        // FROM `klanten` 
        // GROUP BY plaats
        // HAVING provincie='noord-holland'
        // ORDER BY count DESC

        // $result = DB::table('klanten')                           
        //             ->select(
        //                 array(
        //                     'plaats',
        //                     DB::raw('plaats, count(*) as plaats_count'),
        //                     'plaats'
        //                 )
        //             )   
        //            ->groupby('plaats', 'provincie')
        //            ->having('provincie', $provincie)                                            
        //            ->orderBy('plaats_count', 'desc')                                             
        //            ->get(); 

        $result = Klant::orderBy('count', 'desc')
                        ->select(
                            array(
                                'plaats',
                                DB::raw('plaats, count(*) as count'),
                                'plaats'
                            )
                        )  
                       ->groupby('plaats', 'provincie')
                       ->having('provincie', $provincie)
                       ->get();                   

        return $result;                              
    }    
}
