<?php

namespace App\Http\Controllers\Warehouse\Inrichting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Warehouse\Inrichting\Picklocatie;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class PicklocatieController extends Controller
{
    public function picklocaties($pagina, $aantal) {
        // $picklocatie_types = Picklocatie::paginate(20);
        // $pagina = 10;
        // $aantal = 50;
        $offset = ($pagina - 1) * $aantal;
        $picklocatie_types = DB::table('picklocaties')
                                ->limit($aantal)
                                ->offset($offset)
                                ->get();

        return $picklocatie_types;
    }

    public function picklocatie($picklocatie_id) {
        $picklocatie_type = Picklocatie::find($picklocatie_id);

        return $picklocatie_type;
    }     

    public function create(Request $request) {
        $picklocatie_type = [
            'picklocatie' => $request['picklocatie'],
            'stelling' => $request['stelling'],                    
            'picklocatie_type_id' => $request['picklocatie_type_id'],    
            'magazijn_id' => $request['magazijn_id'],       
            'beschikbaar' => $request['beschikbaar'],                                                         
        ];

        $picklocatie_response = Picklocatie::create($picklocatie_type);

        return response($picklocatie_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $picklocatie_id) {
        $picklocatie_type = [
            'picklocatie' => $request['picklocatie'],
            'stelling' => $request['stelling'],            
            'picklocatie_type_id' => $request['picklocatie_type_id'],    
            'magazijn_id' => $request['magazijn_id'],  
            'beschikbaar' => $request['beschikbaar'],                                                                 
        ];  

        Picklocatie::find($picklocatie_id)
                   ->update($picklocatie_type); 
    }      

    public function remove($picklocatie_id) {
        Picklocatie::destroy($picklocatie_id);
    }

    public function metadata() {
        //$pick_locaties = Picklocatie::paginate(20);

        // $picklocaties = [];
        // foreach($pick_locaties as $pick_locatie) {
        //     array_push(
        //         $picklocaties, 
        //         $pick_locatie, 
        //         $pick_locatie->picklocatie_type,                
        //         $pick_locatie->picklocatie_type->type,
        //         $pick_locatie->picklocatie_type->hoogte,                                                             
        //     );
        // }

        // $picklocaties = DB::table('picklocaties')
        //                         ->join('picklocatie_types', 'picklocatie_types.id', '=', 'picklocaties.picklocatie_type_id') 
        //                         ->take(20)
        //                         ->get([
        //                             'picklocaties.id AS pick_id',
        //                             'picklocatie',
        //                             'type',
        //                             'breedte',
        //                             'hoogte',
        //                             'diepte',
        //                             'starthoogte',
        //                             'magazijn_id'
        //                         ]);

        $picklocaties = DB::table('picklocaties')
                            ->join('picklocatie_types', 'picklocatie_types.id', '=', 'picklocaties.picklocatie_type_id') 
                            ->select([
                                'picklocaties.id AS pick_id',
                                'picklocatie',
                                'type',
                                'breedte',
                                'hoogte',
                                'diepte',
                                'starthoogte',
                                'magazijn_id'
                            ])
                            ->paginate(20);                                     

        return $picklocaties;
    }    
}
