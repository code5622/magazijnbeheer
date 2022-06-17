<?php

namespace App\Utility;

use Illuminate\Support\Facades\DB;

class Filter {
    public string $query_string;
    public string $table_column; 
    public string $data_type;   

    function __construct($query_string, $table_column, $data_type) {
        $this->query_string = $query_string;
        $this->table_column = $table_column;
        $this->data_type = $data_type;                
    }

    public static function buildFilters($request, $columns) {

        $number_of_filters = count($columns);

        $where = '';

        for($index = 0; $index < $number_of_filters; $index++) {

            $column = $columns[$index];
            $filterIndex = $index;

            $result = SortFilter::hasFilter(
                $column->query_string, 
                $column->table_column, 
                $column->data_type,
                $filterIndex
            );

            if($result[1] != null) {
                $where .= $result[0] . ' ' . $result[1];
            } else {
                $where = $result[0] . $where; 
            }  
        }

        return $where;
    }
}