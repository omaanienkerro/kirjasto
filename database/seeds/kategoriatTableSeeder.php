<?php

use Illuminate\Database\Seeder;

class kategoriatTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kategoriat')->insert([
            'kategoria' => ('Tietokirjat')
        ]);

        DB::table('kategoriat')->insert([
            'kategoria' => ('Hyvinvointi')
        ]);
    }
}
