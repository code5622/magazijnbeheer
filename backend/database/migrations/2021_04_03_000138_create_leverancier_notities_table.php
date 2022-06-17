<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeverancierNotitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leverancier_notities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('leveranciers_id');
            $table->foreignId('user_id');
            $table->date('datum');
            $table->string('notitie');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leverancier_notities');
    }
}
