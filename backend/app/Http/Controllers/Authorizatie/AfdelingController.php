<?php

namespace App\Http\Controllers\Authorizatie;

use Illuminate\Http\Request;
use App\Models\Authorizatie\Afdeling;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class AfdelingController extends Controller
{
    public function afdelingen() {
        $afdelingen = Afdeling::all();

        return $afdelingen;
    }

    public function afdeling($afdeling_id) {
        $afdeling = Afdeling::find($afdeling_id);

        return $afdeling;
    }     

    public function create(Request $request) {
        $afdeling =  [
            'naam' => $request['naam']
        ];

        $afdeling_response = Afdeling::create($afdeling);

        return response($afdeling_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $afdeling_id) {
        $afdeling =  [
            'naam' => $request['naam']
        ];

        Afdeling::find($afdeling_id)
                ->update($afdeling); 
    }      

    public function remove($afdeling_id) {
        Afdeling::destroy($afdeling_id);
    }        
}
