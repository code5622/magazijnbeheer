<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerkoopOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verkooporders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('klanten_id')->nullable(false); 
            $table->boolean('orderpicking')->default(0);             
            $table->boolean('geleverd')->default(0);;    
            $table->timestamp('verkoopdatum')->nullable(false);  
            $table->timestamp('afleverdatum')->nullable();                   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verkooporders');
    }
}
