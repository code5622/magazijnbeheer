<?php

namespace App\Utility;

use App\Utility\Filter;
use Illuminate\Support\Facades\DB;

class QueryBuilder {

    public static function build($current_page, $page_rows, $metadata, $request) {

         $columns = self::fetchColumns($metadata, $request);

        dd($columns);
        exit();

         $filters = Filter::buildFilters($request, $columns);
 
         $orderBy = ''; 
         $orderBy .= SortFilter::hasSort($request['verpakkingseenheid_sort'], 'kenmerken.verpakkingseenheid');    
         $orderBy .= SortFilter::hasSort($request['id_sort'], 'producten.id');  
         // $orderBy .= SortFilter::hasSort($request['verpakkingseenheid_sort'], 'kenmerken.verpakkingseenheid');    
         // $orderBy .= SortFilter::hasSort($request['id_sort'], 'producten.id'); 


        $offset = ($current_page - 1) * $page_rows;
        $where = null;

        if($filters) {
            $where = "WHERE $filters";
        }

        $table_columns = "";

        $len = count($metadata);
        $counter = 1;

        foreach($metadata as $data) {
            if ($counter != $len) {
                $table_columns .= ' ' . $data['table'] . ',';
            } else {
                $table_columns .= ' ' . $data['table'] . ' ';
            }
            
            $counter++;
        }

        // dd($table_columns);
        // exit();

        $query = "
            SELECT $table_columns 
            FROM `producten` 
            JOIN producteigenschappen as kenmerken 
            ON kenmerken.product_id=producten.producteigenschap_id
            $where
            $orderBy
            LIMIT $page_rows OFFSET $offset         
        ";     

        $producten = DB::Select(DB::Raw($query));

        $totalCount = null;
        if ($where != '') {
            $totalCount = QueryBuilder::totalCount($where);         
        }        
        
        return ['data' => $producten, 'total_count' => $totalCount];
    }

    public static function fetchColumns($metadata, $request) {
        $columns = [];

        foreach($metadata as $data) {
            $column = 'query_' . $data->column_alias;            
            $search = $request[$column];
            $table_column = $data->table . '.' . $data->column;
            $data_type = $data->data_type;

            if ($search) {
                array_push($columns, new Filter($search, $table_column, $data_type));
            }  
        }  
        
        return $columns;
    }

    public static function totalCount($where) {
        $query = "
            SELECT COUNT(producten.id) as totalCount
            FROM `producten` 
            JOIN producteigenschappen as kenmerken 
            ON kenmerken.product_id=producten.producteigenschap_id
            $where    
        ";   

        $data = DB::Select(DB::raw($query));
        $total_count = $data[0]->totalCount;

        return $total_count;
    }    
}

// $producten = DB::table('producten')
//                ->select(DB::raw('COUNT(producten.id) as totalCount'))
//                ->join('producteigenschappen', 'producteigenschappen.id', '=', 'producten.id')
//                ->get();
