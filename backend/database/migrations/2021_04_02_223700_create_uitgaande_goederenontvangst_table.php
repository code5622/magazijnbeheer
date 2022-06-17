<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUitgaandeGoederenontvangstTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uitgaande_goederenontvangst', function (Blueprint $table) {
            $table->id();
            $table->integer('aantal')->nullable(false);          
            $table->integer('inkooporder_id')->nullable(false);                       
            $table->foreignId('product_id')->nullable(false); 
            $table->foreignId('user_id');            
            $table->timestamp('verwerkingsdatum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('uitgaande_goederenontvangst');
    }
}
