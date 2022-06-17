<?php

namespace Database\Factories;

use App\Models\VerkoopPrijs;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class VerkoopPrijsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = VerkoopPrijs::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $product_id = rand(1, 1);

        // $product = Verkoopprijs::where('product_id', $product_id)
        //                         ->orderBy('datum', 'desc')
        //                         ->first();;        
        
        // $date = new Carbon($product->datum);                                

        // $year = $date->year;
        // $month = $date->month + 1;  

        // $day = rand(1, 26);

        // if($month > 12) {
        //     $month = 1;
        //     $year = $date->year + 1;
        // }
 
        // $sales_price = rand(1, 200);                
        
        // return [
        //     'datum' => Carbon::create($year, $month, $day),
        //     'verkoopprijs' => $sales_price,
        //     'product_id' => $product_id
        // ];
    }  
}
