<?php

namespace App\Http\Controllers\Warehouse\Inrichting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Warehouse\Inrichting\ProductEigenschap;

class ProductEigenschapController extends Controller
{
    public function producten() {
        $producteigenschappen = ProductEigenschap::paginate(20);
        
        return $producteigenschappen;
    }

    public function product($producteigenschap_id) {
        $producteigenschap = ProductEigenschap::find($producteigenschap_id);

        return $producteigenschap;
    }     

    public function create(Request $request) {
        $producteigenschap = [
           'hoogte' =>  $request['hoogte'],
           'breedte' =>  $request['breedte'],        
           'lengte' =>  $request['lengte'],                           
        ];

        $producteigenschap_response = ProductEigenschap::create($producteigenschap);

        return response($producteigenschap_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $producteigenschap_id) {
        $producteigenschap = [
            'hoogte' =>  $request['hoogte'],
            'breedte' =>  $request['breedte'],        
            'lengte' =>  $request['lengte'],                           
         ];

        ProductEigenschap::find($producteigenschap)
                         ->update($product); 
    }      

    public function remove($producteigenschap_id) {
        ProductEigenschap::destroy($producteigenschap_id);
    }  
}
