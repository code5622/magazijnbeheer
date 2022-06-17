<?php 

namespace App\Utility;

class SortFilter {
    public static $number_of_filters = 0;
    public static $number_of_sorts = 0;

    public static function hasFilter($filter, $column, $columnType, $filterIndex) {      
        self::$number_of_filters = $filterIndex;

        $columnFilter = null;
        $value = self::contains($column, $filter, $columnType);

        // if($value) {
        //     $columnFilter = $value;
        // }

        return $value;
    }

    public static function hasSort($sort, $tableColumn) {
        if($sort) {                     
            if(self::$number_of_sorts == 0) {
                self::$number_of_sorts++;
                return " ORDER BY $tableColumn " . $sort;  
            } else {
                return ", $tableColumn " . $sort;  
            }
        }            
        
        return '';
    } 

    public static function sortId() {
        return null;
    }

    private static function sortValue() {
        return null;
    }
    
    private static function contains($column, $search, $columnType) {

        $length =  substr_count($search, '$');
        $columnFilter = ''; 

        for($index=0; $index<$length ; $index++) {
            $constraintResult = self::constraint($search, $index);
            $constraint = $constraintResult['constraint'];
            $logicalOperator = $constraintResult['logicalOperator'];

            $not_operator = self::notOperator($search);
            $filter = self::filter($search, $index);     
            $value= '';

            switch($constraint) {
                /* ********** string operators ************************************************ */
                
                case 'startswith':
                    $value = " $column $not_operator LIKE '$filter%'"; 
                    break;              
                case 'endswith':
                    $value = " $column $not_operator LIKE '%$filter'";
                    break;                                          
                case 'contains':
                    $value = " $column $not_operator LIKE '%$filter%'";    
                    break;                       
                /* ********** comparisson operators ************************************************ */
                case 'is':
                    // if($columnType != 'number') {
                    //     $value .= " $not_operator $column='$filter'";
                    //     break;                        
                    // }
                    $value = " $not_operator $column='$filter'";   
                    break;                                  
                case 'greater':    
                    // if($columnType != 'number') {
                    //     $value .= " $not_operator $column>'$filter'";
                    //     break;
                    // }
                    $value = " $not_operator $column>'$filter'"; 
                    break;                       
                case 'greater_or_equal':    
                    // if($columnType != 'number') {
                    //     $value = " $not_operator $column>='$filter'";
                    //     break;                        
                    // }
                    $value = " $not_operator $column>='$filter'"; 
                    break;                                        
                case 'smaller':    
                    // if($columnType != 'number') {
                    //     $value .= " $not_operator $column<'$filter'";
                    //     break;                        
                    // }
                    $value = " $not_operator $column<'$filter'"; 
                    break;                       
                case 'smaller_or_equal':    
                    // if($columnType != 'number') {
                    //     $value = " $not_operator $column<='$filter'";
                    //     break;                        
                    // }
                    $value = " $not_operator $column<='$filter'";     
                    break;                                                   
                /* ********** date operators ************************************************ */                                          
                case 'year':
                    $value = " $not_operator YEAR(datum)=$filter";    
                    break;                       
                case 'quarter':
                    $value = " $not_operator QUARTER(datum)=$filter"; 
                    break;                                           
                case 'month':
                    $value = " $not_operator MONTH(datum)=$filter"; 
                    break;                          
                case 'day':
                    $value = " $not_operator DAY(datum)=$filter"; 
                    break;                         
                /* ********** empty operator ************************************************ */                   
                case 'empty':
                    $value = " $column $not_operator LIKE ''";     
                    break;                                                                                                 
                default:
                    $columnFilter .= '';
                    break;                       
            } 

            $columnFilter .= " $value";   
            
            // if($constraint === 'greater_or_equal') {
            //     echo $columnFilter;
            //     exit();  
            // }            
        }

        return [$columnFilter, $logicalOperator];

    }

    private static function notOperator($search) {
        $notOperator = '';
        $start = strpos($search, '__');

        if($start != 0) {
            $not_operator = 'NOT';
            $start = $start + 1;
        } 

        return $notOperator;
    }

    private static function constraint($search, $index) { 
        $constraint = null;
        $constraintResult = null;
        $logicalOperator = null;

        $prevStart = 0;
        $prevEnd = 0;
        $nextFilterIndex = 0;
        for($i=0; $i<=$index; $i++) {

            if ($nextFilterIndex == 0 && self::$number_of_filters == 0) {
                $start = strpos($search, '$', $prevStart); 
                $start += strlen('$'); 
            } else {
                $nextFilter = substr($search, $nextFilterIndex, 5);

                if($nextFilter == '$and^') {
                    $start = strpos($search, '$and^', $prevStart);
                    $start += strlen('$and^'); 
                    $logicalOperator = 'AND';
                } else {
                    $start = strpos($search, '$or^', $prevStart);
                    $start += strlen('$or^'); 
                    $logicalOperator = 'OR';                    
                }                              
            }   
            
            $start_length = 1;   
            $end = strpos($search, '=', $prevEnd);            

            $length = $end - $start;
            $prevStart = $start;
            $prevEnd = ++$end; 

            $nextFilterIndex = strpos($search, '$', $prevStart);          

            if($index == $i) {          
                $constraint = substr($search, $start, $length);              
                $constraintResult = [
                    'constraint' => $constraint,
                    'logicalOperator' => $logicalOperator
                ];
            }
            
        } 

        return $constraintResult;
    }  
    
    private static function filter($search, $index) {
        $filter = null;

        $prevStart = 1;
        $prevEnd = 0;
        for($i=0; $i<=$index; $i++) {
            $start = strpos($search, '=', $prevStart);
            $end = strpos($search, '$', $prevStart);
            if($end == 0) {
                $end = 200;
            }
            $prevStart =  $end + 1;
            $prevEnd = $end + 1;

            $length = $end - $start;
            if($index == $i) {
                $filter = substr($search, $start + 1, $length - 1);             
            }  
        }     
        
        return $filter;        
    }     
}