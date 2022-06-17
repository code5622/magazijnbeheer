<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDozenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dozen', function (Blueprint $table) {
            $table->id();
            $table->string('doostype');
            $table->integer('lengte');
            $table->integer('breedte');   
            $table->integer('hoogte');   
            $table->integer('gewicht');  
            $table->integer('draagkracht');                                              
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dozen');
    }
}
