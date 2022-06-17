<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAfgekeurdeProductenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('afgekeurde_producten', function (Blueprint $table) {
            $table->id();
            $table->integer('aantal');
            $table->double('inkoopprijs', 6, 2);
            $table->foreignId('user_id');
            $table->string('reden');
            $table->foreignId('product_id');
            $table->timestamp('afkeurdatum');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('afgekeurde_producten');
    }
}
