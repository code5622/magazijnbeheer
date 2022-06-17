<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UI\Filter;
use Symfony\Component\HttpFoundation\Response;

class FilterController extends Controller
{
    public function filters() {
        $filters = Filter::all();

        return $filters;
    }

    public function filter($url, $filter_id) {
        $filter = Filter::where('url', $url)
                        ->where('filter_id', $filter_id)
                        ->get();

        return $filter;
    }     

    public function create(Request $request) {
        $filter =  [
            'url' => $request['url'],
            'filter_id' => $request['filter_id'],
            'logical_operator' => $request['logical_operator'],
            'filter_column' => $request['filter_column'],
            'not_operator' => $request['not_operator'], 
            'filter_type' => $request['filter_type'],
            'filter_value' => $request['filter_value'],                                                                  
        ];      

        $filter_response = Filter::create($filter);

        return response($filter_response, Response::HTTP_CREATED);
    }   
    
    public function update(Request $request, $url, $filter_id) {
        $filter =  [
            'url' => $request['url'],
            'filter_id' => $request['filter_id'],
            'logical_operator' => $request['logical_operator'],
            'filter_column' => $request['filter_column'],
            'not_operator' => $request['not_operator'], 
            'filter_type' => $request['filter_type'],
            'filter_value' => $request['filter_value'],   
        ];

        Filter::where($url)
              ->where($filter_id)
              ->update($filter); 
    }      

    public function remove($url, $filter_id) {
        Filter::where('url', $url)
              ->where('filter_id', $filter_id)
              ->delete();
    }   
}
