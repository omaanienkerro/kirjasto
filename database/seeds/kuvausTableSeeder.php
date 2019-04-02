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
            'nimi' => ('Web Development with Assembly'),
            'kuva' => ('kirja1.jpg'),
            'kuvaus' => ('You might as well jus tkill yourself right now'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);

        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Excuses for not writing unit tests'),
            'kuva' => ('kirja2.jpg'),
            'kuvaus' => ('your application is a special snowflake'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);


        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Writing useless git commit messages'),
            'kuva' => ('kirja3.jpg'),
            'kuvaus' => ('git commit -m "changes"'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);


        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Changing stuff and seeing what hapens'),
            'kuva' => ('kirja4.png'),
            'kuvaus' => ('How to actually learn any new programming consept'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);

        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Trying stuff until it works'),
            'kuva' => ('kirja5.jpg'),
            'kuvaus' => ('Software can be chaotic, but we make it work'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);


        DB::table('kuvaus')->insert([
            'tekijaID' => (1),
            'nimi' => ('Works on my machine'),
            'kuva' => ('kirja6.jpg'),
            'kuvaus' => ('How to convicence your manager'),
            'tyyppiID' => (1),
            'kategoriaID' => (1),
            'vuosi' => (2019),
        ]);


    }
}
