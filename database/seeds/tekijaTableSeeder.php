<?php

use Illuminate\Database\Seeder;

class tekijaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tekija')->insert([
            'nimi' => ('John Doe')
        ]);
    }
}
