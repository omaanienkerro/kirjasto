<?php

use Illuminate\Database\Seeder;

class kuvausTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Webdev assembly'),
            'kuva' => ('kirja1.jpg'),
            'kuvaus' => ('Webdev assembly'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),

        ]);
    }
}
