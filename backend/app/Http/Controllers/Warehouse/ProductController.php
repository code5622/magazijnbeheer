<?php

namespace App\Http\Controllers\Warehouse;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Warehouse\Product;
use Illuminate\Support\Facades\DB;
use App\Utility\QueryBuilder;
use App\Utility\Paginate;
use App\Utility\MetaData;

// $producten = DB::table('producten')
//                         ->where('kenmerken.verpakkingseenheid', $verpakkingseenheid_operator, $verpakkingseenheid_filter)
//                         ->where('kenmerken.breedte', '>=', 0)                                
//                         ->join('producteigenschappen AS kenmerken', 'kenmerken.product_id', '=', 'producten.producteigenschap_id')
//                         // ->orderBy('kenmerken.verpakkingseenheid')
//                         // ->orderBy('kenmerken.hoogte')    
//                         // ->orderBy('kenmerken.lengte', 'desc') 
//                         ->limit($aantal)
//                         ->offset($offset)                                                                                               
//                         ->get([
//                             'producten.id',
//                             'producten.naam',
//                             'kenmerken.verpakkingseenheid',
//                             'kenmerken.hoogte',
//                             'kenmerken.lengte',
//                             'kenmerken.breedte',                                                                                                                                             
//                         ]); 

class ProductController extends Controller
{
    public function products($current_page, $page_rows, Request $request) {

        $metadata = [
            new MetaData('kenmerken', 'verpakkingseenheid', 'units', 'number'),
            new MetaData('producten', 'naam', 'name', 'string'),  
            new MetaData('producten', 'datum', 'date', 'date'), 
            new MetaData('producten', 'id', 'id', 'number'),                                                                       
        ];

        $products = QueryBuilder::build($current_page, $page_rows, $metadata, $request);  

        $total_count = $products['total_count'];
        $products = $products['data'];
        $products = Paginate::build(new Product, $current_page, $page_rows, $products, $total_count);

        return json_encode($products);
    }

    public function product($product_id) {
        $product = Product::find($product_id);

        return $product;
    }     

    public function create(Request $request) {
        $product = [
           'naam' =>  $request['naam'],
           'leverancier_id' =>  $request['leverancier_id'],           
        ];

        $product_response = Product::create($product);

        return response($product_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $product_id) {
        $product = [
            'naam' =>  $request['naam'],
            'leverancier_id' =>  $request['leverancier_id'],           
        ];

        Product::find($product_id)
               ->update($product); 
    }      

    public function remove($product_id) {
        Product::destroy($product_id);
    }  
}
