<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\InpakkenOrder;
use App\Models\Verkoop;
use App\Models\Inkoop;

class SimpleController extends Controller
{

    public function __construct()
    {
        ini_set('max_execution_time', 600000000);
    }

    public function factory() {
        // Som per dag **********************************************************************************************
        // SELECT sum(aantal), datum FROM `inpakken_orders` where product_id=1 GROUP BY datum

        // Som per weekdag (ma, di, wo, do, vr, za, zo) *******************************************************************
        // SELECT sum(aantal), WEEKDAY(datum) FROM `inpakken_orders` where product_id=1 weekday() GROUP BY datum
        // SELECT sum(aantal), datum, WEEKDAY(datum) FROM `inpakken_orders` where product_id=1 and weekday(datum)=1 GROUP BY datum 
        
        // Som per Week *****************************************************************************************
        // SELECT sum(aantal), datum, WEEK(datum) FROM `inpakken_orders` where product_id=1 GROUP BY YEAR(DATUM), WEEK(datum)

        // Som per Maand *****************************************************************************************
        // SELECT sum(aantal), datum, MONTH(datum) FROM `inpakken_orders` where product_id=1 GROUP BY YEAR(DATUM), MONTH(datum) 
  
        // Som per Kwartaal *****************************************************************************************
        // SELECT sum(aantal), datum, QUARTER(datum) FROM `inpakken_orders` where product_id=1 GROUP BY YEAR(DATUM), QUARTER(datum)           

        // Som per Jaar *****************************************************************************************
        // SELECT sum(aantal), datum, Year(datum) FROM `inpakken_orders` where product_id=1 GROUP BY YEAR(DATUM)          
        $sales_id = 1;

        for($y = 100 ; $y <= 100 ; $y++) {
            $product_id = $y;

            $out = new \Symfony\Component\Console\Output\ConsoleOutput();
            $out->writeln("terminal xxx : " . $product_id);            

            $sales_id = 1;

            $date = Carbon::create('2010', '12', '31');

            $seeder = rand(1, 5);

            if($product_id <= 50) {
                $sales_aantal = rand(0, 1);                   
            } elseif($product_id <= 60) {
                $sales_aantal = 2;             
            } elseif($product_id <= 70) {
                $sales_aantal = 3; 
            } elseif($product_id <= 80) {
                $sales_aantal = 4; 
            } elseif($product_id <= 90) {
                $sales_aantal = rand(6, 10); 
            } elseif($product_id <= 100) {
                $sales_aantal = rand(11, 200); 
            }
                      
            for($i = 0; $i < 100000; $i++) {
                $date = $date->addDays(1);

                if($date < Carbon::now()) {
                    // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
                    // $out->writeln("terminal xxx : " . $date);

                    //$orders_per_day = round($sales_aantal / 1.5, 0);

                    $start_per_day = 0;

                    for($x = 0; $x < 1000; $x++) {
                        
                        $orders_per_day = $sales_aantal * (rand(6, 10) /10);
            
                        $negative_positive = rand(0, 1);
                
                        if($negative_positive == 0) {
                            $orders_per_day = $sales_aantal * (1 - rand(1, 99) / 100);
                        } else {
                            $orders_per_day = $sales_aantal * (1 + rand(0, 10) / 100);                     
                        }

                        if ($start_per_day <= $orders_per_day) {

                            if($product_id <= 50) {
                                $aantal = rand(0, 1);                   
                            } elseif($product_id >= 50) {
                                $aantal = rand(1, 5);             
                            }    

                            $start_per_day = $start_per_day + $aantal;
                            $sales_id = $sales_id + 1;
                            
                            if ($aantal > 0) {
                                InpakkenOrder::create([
                                    'datum' => $date,
                                    'user_id' => rand(1, 100),
                                    'product_id' => $product_id,
                                    'aantal' => $aantal,
                                    'verkooporder_id' => $sales_id,
                                    'datum' => $date,
                                ]);
                            }                
                        } else {
                            break;
                        }
                    }  
                }  
            }
        }
    }    
}