<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKlantenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('klanten', function (Blueprint $table) {
            $table->id();
            $table->date('datum');                                
            $table->string('voornaam');
            $table->string('achternaam');    
            $table->string('adres');
            $table->string('postcode'); 
            $table->string('provincie');             
            $table->string('plaats');     
            $table->string('land');               
            $table->string('verzendadres'); 
            $table->string('verzendpostcode');  
            $table->string('verzendplaats');  
            $table->string('verzendprovincie');                 
            $table->string('verzendland');                                                  
            $table->string('telefoon'); 
            $table->string('email'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('klanten');
    }
}
