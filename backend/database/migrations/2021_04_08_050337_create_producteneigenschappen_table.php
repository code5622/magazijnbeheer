<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProducteneigenschappenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producteigenschappen', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');     
            $table->integer('verpakkingseenheid');                      
            $table->double('hoogte', 5, 1)->nullable();
            $table->double('lengte', 5, 1)->nullable(); 
            $table->double('breedte', 5, 1)->nullable();     
            $table->integer('gewicht')->nullable();          
            $table->double('doos_hoogte', 5, 1)->nullable();
            $table->double('doos_lengte', 5, 1)->nullable(); 
            $table->double('doos_breedte', 5, 1)->nullable();                                                
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producteneigenschappen');
    }
}
