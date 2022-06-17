<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInkoopprijzenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inkoopprijzen', function (Blueprint $table) {
            $table->id();
            $table->date('datum');
            $table->double('inkoopprijs', 6, 2);
            $table->foreignId('product_id');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inkoopprijzen');
    }
}
