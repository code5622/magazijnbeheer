<?php

namespace App\Http\Controllers\Authorizatie;

use App\Http\Controllers\Controller;
use App\Models\Authorizatie\SubAfdeling;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SubAfdelingController extends Controller
{
    public function subafdelingen() {
        $subafdelingen = SubAfdeling::all();

        return $subafdelingen;
    }

    public function subafdeling($subafdeling_id) {
        $subafdeling = SubAfdeling::find($subafdeling_id);

        return $subafdeling;
    }     

    public function create(Request $request) {
        $subafdeling =  [
            'naam' => $request['naam']
        ];

        $subafdeling_response = SubAfdeling::create($subafdeling);

        return response($subafdeling_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $subafdeling_id) {
        $subafdeling =  [
            'naam' => $request['naam']
        ];

        SubAfdeling::find($subafdeling_id)
                   ->update($subafdeling); 
    }      

    public function remove(Request $request, $subafdeling_id) {
        SubAfdeling::destroy($subafdeling_id);
    }
}
