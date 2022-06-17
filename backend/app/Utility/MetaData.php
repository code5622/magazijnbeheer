<?php

namespace App\Utility;

use Illuminate\Support\Facades\DB;

class MetaData {
    public string $table;
    public string $column; 
    public string $column_alias;   
    public string $data_type;       
   
    function __construct($table, $column, $column_alias, $data_type, ) {
        $this->table = $table;
        $this->column = $column;
        $this->column_alias = $column_alias;    
        $this->data_type = $data_type;                     
    }    
}