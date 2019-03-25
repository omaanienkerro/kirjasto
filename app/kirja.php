<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class kirja extends Model
{
    protected $table = 'kuvaus';

    public function tekija()
    {
        return $this->hasOne('App\tekija', 'id', 'tekijaID');

    }

    public function tyyppi()
    {
        return $this->hasOne('App\tyyppi', 'id', 'tyyppiID');

    }

    public function kategoria()
    {
        return $this->hasOne('App\kategoria', 'id', 'kategoriaID');

    }
}
