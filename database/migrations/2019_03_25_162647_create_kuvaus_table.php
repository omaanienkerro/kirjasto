<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKuvausTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuvaus', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('tekijaID')->unsigned();
            $table->string('nimi');
            $table->string('kuva');
            $table->mediumText('kuvaus');
            $table->integer('tyyppiID')->unsigned();
            $table->integer('kategoriaID')->unsigned();
            $table->integer('vuosi');
            $table->timestamps();




        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kuvaus');
    }
}
