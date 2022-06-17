<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\VerkoopPrijs;

class VerkoopPrijzenTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

//     public function getData() {
//         $product_id = rand(1, 1);

//         $product = Verkoopprijs::where('product_id', $product_id)
//                                 ->orderBy('datum', 'desc')
//                                 ->first();;        
        
//         $date = new Carbon($product->datum);                                

//         $year = $date->year;
//         $month = $date->month + 1;  

//         $day = rand(1, 26);

//         if($month > 12) {
//             $month = 1;
//             $year = $date->year + 1;
//         }
 
//         $sales_price = rand(1, 200); 

//         return [
//             'product_id' => $product_id,
//             'year' => $year,
//             'month' => $month,
//             'day' => $day,
//             'sales_price' => $sales_price
//         ];
//     }

    public function run()
    {
   
        // $data = $this->getData();

        // for ($i = 0; $i <= 2; $i++) {
        //     DB::table('verkoopprijzen')->insert([
        //         'datum' => Carbon::create($data['year'], $data['month'], $data['day']),
        //         'verkoopprijs' => $data['sales_price'],
        //         'product_id' => $data['product_id']
        //     ]);
        //   }

        // DB::table('verkoopprijzen')->insert([
        //     'datum' => Carbon::create('2021', '03', '14'),
        //     'verkoopprijs' => '63.68',
        //     'product_id' => 1
        // ]);
    }
}
