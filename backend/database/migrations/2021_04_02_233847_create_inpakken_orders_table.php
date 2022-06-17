<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInpakkenOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inpakken_orders', function (Blueprint $table) {
            $table->id();
            $table->date('datum');            
            $table->foreignId('user_id');
            $table->foreignId('product_id');      
            $table->foreignId('aantal');                    
            $table->foreignId('verkooporder_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inpakken_orders');
    }
}
