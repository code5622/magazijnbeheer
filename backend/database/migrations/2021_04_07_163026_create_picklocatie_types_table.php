<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePicklocatieTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('picklocatie_types', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->integer('hoogte');
            $table->integer('breedte'); 
            $table->integer('diepte');   
            $table->integer('starthoogte');                                    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('picklocatie_types');
    }
}
