<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerkopenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verkopen', function (Blueprint $table) {
            $table->id();
            $table->integer('aantal')->nullable(false); 
            $table->double('verkoopprijs', 6, 2)->nullable(false);            
            $table->integer('verkooporder_id')->nullable(false);                       
            $table->foreignId('product_id')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verkopen');
    }
}
