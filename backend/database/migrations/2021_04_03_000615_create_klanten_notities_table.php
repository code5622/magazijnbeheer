<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKlantenNotitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('klanten_notities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('klanten_id');
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
        Schema::dropIfExists('klanten_notities');
    }
}
