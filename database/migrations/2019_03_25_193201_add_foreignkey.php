<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignkey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sakot', function($table) {
            $table->foreign('userID')->references('id')->on('users');
            $table->foreign('lainaID')->references('id')->on('lainat');
        });

        Schema::table('lainat', function($table) {
            $table->engine = 'InnoDB';
            $table->foreign('userID')->references('id')->on('users');
            $table->foreign('lainattavaID')->references('id')->on('lainattavat');

        });

        Schema::table('varaukset', function($table) {
            $table->foreign('userID')->references('id')->on('users');
            $table->foreign('lainattavaID')->references('id')->on('lainattavat');
        });

        Schema::table('lainattavat', function($table) {
            $table->foreign('kuvausID')->references('id')->on('kuvaus');
        });

        Schema::table('kuvaus', function($table) {
            $table->foreign('tekijaID')->references('id')->on('tekija');
            $table->foreign('tyyppiID')->references('id')->on('tyypit');
            $table->foreign('kategoriaID')->references('id')->on('kategoriat');
        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
