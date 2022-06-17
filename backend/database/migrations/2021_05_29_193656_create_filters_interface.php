<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiltersInterface extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filters_interface', function (Blueprint $table) {
            $table->id();
            $table->integer('search_id');
            $table->integer('filter_id');
            $table->string('logical_operator')->nullable();            
            $table->string('filter_column')->nullable();
            $table->string('not_operator')->nullable();
            $table->string('filter_type')->nullable();  
            $table->string('filter_value')->nullable();  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('filters_interface');
    }
}
