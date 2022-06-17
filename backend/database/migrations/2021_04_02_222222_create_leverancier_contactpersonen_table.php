<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeverancierContactpersonenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leverancier_contactpersonen', function (Blueprint $table) {
            $table->id();
            $table->string('naam');
            $table->string('telefoonnumer');
            $table->string('mobiel');   
            $table->string('email');         
            $table->foreignId('leveranciers_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leverancier_contactpersonen');
    }
}
