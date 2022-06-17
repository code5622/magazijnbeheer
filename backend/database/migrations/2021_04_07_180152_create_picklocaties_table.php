<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePicklocatiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('picklocaties', function (Blueprint $table) {
            $table->id();
            $table->string('picklocatie');
            $table->string('stelling');
            $table->foreignId('picklocatie_type_id');
            $table->foreignId('magazijn_id');
            $table->boolean('beschikbaar');            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('picklocaties');
    }
}
