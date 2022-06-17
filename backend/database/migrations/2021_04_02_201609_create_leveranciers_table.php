<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeveranciersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leveranciers', function (Blueprint $table) {
            $table->id();
            $table->string('bedrijfsnaam');
            $table->string('land');
            $table->string('provincie');     
            $table->string('plaats');  
            $table->string('adres'); 
            $table->string('postcode');                             
            $table->string('telefoonnummer'); 
            $table->string('website');              
            $table->string('email');                                            
            $table->timestamp('aanmaakdatum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leveranciers');
    }
}
