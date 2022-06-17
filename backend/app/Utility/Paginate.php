<?php

namespace App\Utility;

use Illuminate\Support\Facades\DB;

class Paginate {
    public static $totalCount;
    public static $currentPage;
    public static $lastPage;

    public static function build($Model, $currentPage, $itemsPage, $data, $totalCount) {       

        self::$totalCount = $totalCount;
        if($totalCount == null) {
            self::$totalCount = $Model::all()->count();
        }
       
        self::$currentPage = $currentPage;
        self::$lastPage = ceil(self::$totalCount / $itemsPage);

        $result = new Paginator(); 
        $result->items = $data;         
        $result->totalCount = self::$totalCount;  
        $result->firstPage =  1;
        $result->lastPage =  self::$lastPage;
        $result->previousPage =  self::previousPage();        
        $result->nextPage =  self::nextPage();
        $result->currentPage =  $currentPage;
        return $result;
    }

    public static function nextPage() {
        $nextPage = self::$currentPage;
        if (self::$currentPage != self::$lastPage) {
            $nextPage += 1;
        }

        return $nextPage;
    }

    public static function previousPage() {
        $previousPage = self::$currentPage;
        if (self::$currentPage != 1) {
            $previousPage -= 1;
        }

        return $previousPage;
    }    
}

class Paginator {
    public $items;
    public $totalCount;
    public $firstPage;
    public $lastPage;
    public $previousPage;
    public $nextPage;
    public $currentPage;
}

