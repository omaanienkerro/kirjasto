<?php

use Illuminate\Database\Seeder;

class tyypitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tyypit')->insert([
            'tyyppi' => ('Kirja')
        ]);
        DB::table('tyypit')->insert([
            'tyyppi' => ('e-kirja')
        ]);
        DB::table('tyypit')->insert([
            'tyyppi' => ('audiokirja')
        ]);

    }
}
