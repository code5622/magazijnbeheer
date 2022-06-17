<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\VerkoopPrijs;
use App\Models\Verkoop\Klant;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

use Database\Seeders\Authorizatie\SubAfdelingSeeder;
use Database\Seeders\Authorizatie\BevoegdheidSeeder;
use Database\Seeders\Authorizatie\AfdelingSeeder;

use Database\Seeders\Warehouse\ProductSeeder;
use Database\Seeders\Warehouse\Inrichting\ProductEigenschapSeeder;
use Database\Seeders\Warehouse\Inrichting\ProductMetadataSeeder;
use Database\Seeders\Warehouse\Inrichting\PicklocatieSeeder;
use Database\Seeders\Warehouse\Inrichting\PicklocatieTypeSeeder;

use Database\Seeders\Verkoop\KlantSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* **************8********** Warehouse **********************************************************************/
        ProductSeeder::build();  
        ProductEigenschapSeeder::build();          
        ProductMetadataSeeder::build();        
        PicklocatieSeeder::build();        
        PicklocatieTypeSeeder::build();

        /* **************8********** Authorizatie **********************************************************************/
        AfdelingSeeder::build();
        BevoegdheidSeeder::build();        
        SubAfdelingSeeder::build();           
    
        /* **************8********** Verkoop **********************************************************************/ 
        KlantSeeder::build(50);               
    }

    /*
    public function factory_creator($counter) {
        for($i = 0; $i < $counter ; $i++) {
            $data = $this->verkoopprijzen_data();

            $date = Carbon::create($data['year'], $data['month'], $data['day']);

            if($date < Carbon::now()) {
                Verkoopprijs::create([
                    'datum' => $date,
                    'verkoopprijs' => $data['sales_price'],
                    'product_id' => $data['product_id']
                ]);  
            } else {
                break;
            }     
        }         
    }

    public function verkoopprijzen($product_id) {

        $product = Verkoopprijs::where('product_id', $product_id)
                                ->orderBy('datum', 'desc')
                                ->first();;        

        $date = new Carbon($product->datum);   

        if($date->month < Carbon::now()->month && $date->year < Carbon::now()->year) {
            return true;    
        }   

        return false;
    }

    public function verkoopprijzen_data() {

        $product_id = rand(1, 1000);

        $product = Verkoopprijs::where('product_id', $product_id)
                                ->orderBy('datum', 'desc')
                                ->first();;        

        if (!$product) {
            return [
                'product_id' => $product_id,
                'sales_price' => rand(100, 10000) / 100,
                'year' => 2011,
                'month' => 1,
                'day' => rand(1,26),                                                         
            ];
        }

        $date = new Carbon($product->datum);                                

        $year = $date->year;
        $month = $date->month + 1;  

        $day = rand(1, 26);

        if($month > 12) {
            $month = 1;
            $year = $date->year + 1;
        }


        $negative_positive = rand(0, 1);

        if($negative_positive == 0) {
            $updated_sales_price = $product->verkoopprijs * (1 - (rand(1, 5) / 100));
        } else {
            $updated_sales_price = $product->verkoopprijs * (1 + (rand(1.5, 7.5) / 100));
        }


        $sales_price = $updated_sales_price;  
  
        // } catch(ModelNotFoundException $e) {
        //     $error = true;
        // } finally {
        //     if ($error) {
        //         $product_id = 1;
        //         $year = 2011;
        //         $day = 2;
        //         $month = 1;
        //         $sales_price = 20;     
                
        //         return [
        //             'product_id' => $product_id,
        //             'sales_price' => $sales_price,
        //             'year' => $year,
        //             'month' => $month,
        //             'day' => $day,  
        //             'error' => $error                                             
        //         ]; 
        //     }           
        // }
  
        return [
            'product_id' => $product_id,
            'sales_price' => $sales_price,
            'year' => $year,
            'month' => $month,
            'day' => $day,                                                         
        ];
    }    

    */
}
