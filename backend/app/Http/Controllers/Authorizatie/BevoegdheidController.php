<?php

namespace App\Http\Controllers\Authorizatie;

use Illuminate\Http\Request;
use App\Models\Authorizatie\Bevoegdheid;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class BevoegdheidController extends Controller
{
    public function bevoegdheden() {
        $bevoegdheden = Bevoegdheid::all();

        return $bevoegdheden;
    }

    public function bevoegdheid($bevoegdheid_id) {
        $bevoegdheid = Bevoegdheid::find($bevoegdheid_id);

        return $bevoegdheid;
    }     

    public function create(Request $request) {
        $bevoegdheid =  [
            'naam' => $request['naam']
        ];

        $bevoegdheid_response = Bevoegdheid::create($bevoegdheid);

        return response($bevoegdheid_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $bevoegdheid_id) {
        $bevoegdheid =  [
            'naam' => $request['naam']
        ];

        Bevoegdheid::find($bevoegdheid_id)
                   ->update($bevoegdheid); 
    }      

    public function remove($bevoegdheid_id) {
        Bevoegdheid::destroy($bevoegdheid_id);
    }        
}
