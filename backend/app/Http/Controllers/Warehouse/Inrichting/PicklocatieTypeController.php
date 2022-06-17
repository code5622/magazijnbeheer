<?php

namespace App\Http\Controllers\Warehouse\Inrichting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Warehouse\Inrichting\PicklocatieType;
use Symfony\Component\HttpFoundation\Response;

class PicklocatieTypeController extends Controller
{
    public function picklocatie_types() {
        $picklocatie_types = PicklocatieType::all();

        return $picklocatie_types;
    }

    public function picklocatie_type($picklocatie_type_id) {
        $picklocatie_type = PicklocatieType::find($picklocatie_type_id);

        return $picklocatie_type;
    }     

    public function create(Request $request) {
        $picklocatie_type = [
            'type' => $request['type'],
            'hoogte' => $request['hoogte'],    
            'breedte' => $request['breedte'], 
            'diepte' => $request['diepte'],  
            'starthoogte' => $request['starthoogte'],                                                  
        ];
        $picklocatie_type_response = PicklocatieType::create($picklocatie_type);

        return response($picklocatie_type_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $picklocatie_type_id) {
        $picklocatie_type = [
            'type' => $request['type'],
            'hoogte' => $request['hoogte'],    
            'breedte' => $request['breedte'], 
            'diepte' => $request['diepte'],  
            'starthoogte' => $request['starthoogte'],                                                  
        ];  

        PicklocatieType::find($picklocatie_type_id)
                ->update($picklocatie_type); 
    }      

    public function remove($picklocatie_type_id) {
        PicklocatieType::destroy($picklocatie_type_id);
    }  
}
