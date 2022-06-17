<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRetourenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('retouren', function (Blueprint $table) {
            $table->id();
            $table->string('reden'); 
            $table->boolean('verkoopbaar')->default(0);             
            $table->integer('aantal');                             
            $table->foreignId('product_id');  
            $table->foreignId('verkooporder_id');                    
            $table->foreignId('user_id');
            $table->timestamp('retourdatum');           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('retouren');
    }
}
