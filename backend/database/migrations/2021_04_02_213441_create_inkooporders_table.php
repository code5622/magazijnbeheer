<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInkoopOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inkooporders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable(false); 
            $table->boolean('orderpicking')->default(0);             
            $table->boolean('geleverd')->default(0);;    
            $table->timestamp('besteldatum')->nullable(false);
            $table->timestamp('verwachte_leveringsdatum')->nullable();  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inkooporders');
    }
}
