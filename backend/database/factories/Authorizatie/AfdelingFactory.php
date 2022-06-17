<?php

namespace Database\Factories;

use App\Models\Verkoop\Klant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class KlantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Verkoop::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //$counter += 0;

        $afdelingen = [
            'Warehouse', 
            'Inkoop', 
            'Verkoop', 
            'Voorraadbeheer', 
            'Goederenontvangst', 
            'Authorizatie'
        ];     
        
        return [
            'naam' => 'Warehouse',
        ];
    }  
}
