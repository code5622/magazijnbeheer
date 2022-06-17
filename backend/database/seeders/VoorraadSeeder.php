<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Voorraad;
use App\Models\Verkoop;
use App\Models\Inkoop;

class VoorraadSeeder extends Seeder
{
    public function run()
    {
        $product = $this->fetchStocks();

        $date = new Carbon($product->datum);
        $date = $date->addDays(1);

        $incoming_shipped_products = $this->incomingShippedProducts($product->product_id, $date);
        $outgoing_shipped_products = $this->outgoingShippedProducts($product->product_id, $date);
        $voorraad = $outgoing_shipped_products->aantal + $incoming_shipped_products + $product->voorraad;

        Voorraad::create([
            'datum' => $date,
            'voorraad' => $voorraad,
            'product_id' => $product->product_id,
        ]);         
   
        // Verkoop::create([
        //     'aantal' => rand(1,10),
        //     'verkoopprijs' => rand(20, 100),
        //     'verkooporder_id' => rand(1, 100),            
        //     'product_id' => 1,
        // ]); 
        
        // Inkoop::create([
        //     'aantal' => 200,
        //     'inkoopprijs' => rand(20, 100),
        //     'inkooporder_id' => rand(1, 100),            
        //     'product_id' => 1,
        // ]);          
    }

    public function fetchStocks() {
        $product_id = rand(1, 10);

        $voorraad_product = Voorraad::where('product_id', $product_id)
                                    ->orderBy('datum', 'desc')
                                    ->first(); 

        if(!$voorraad_product) {
            $voorraad_product = new Voorraad();
            $voorraad_product->datum = Carbon::create('2010', '12', '31');
            $voorraad_product->voorraad = rand(10, 50);
            $voorraad_product->product_id = $product_id;
            
            return $voorraad_product;
        } 
        
        return $voorraad_product;
    }

    public function outgoingShippedProducts($product_id, $date) {


        $aantal = InpakkenOrders::where([
            ['product_id', $product_id],
            ['datum', $date]
        ])->groupBy('aantal')->get();

        if(!$aantal) {
            return 0;
        }                                    

        return $aantal;
    }    

    public function incomingShippedProducts($product_id, $date) {
        $aantal = UitgaandeGoederenOntvangst::where([
            ['product_id', $product_id],
            ['verwerkingsdatum', $date]
        ])->groupBy('aantal')->get();

        if(!$aantal) {
            return 0;
        }                                    

        return $aantal;
    }       
}
