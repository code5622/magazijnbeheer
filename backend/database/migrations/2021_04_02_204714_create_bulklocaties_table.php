<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBulklocatiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bulklocaties', function (Blueprint $table) {
            $table->id();
            $table->string('bulklocatie');
            $table->integer('breedte'); 
            $table->integer('diepte');   
            $table->integer('hoogte');                                    
            $table->foreignId('magazijn_id'); 
            $table->boolean('beschikbaar')->default(1);               
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bulklocaties');
    }
}
