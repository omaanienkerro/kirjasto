<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class lainattava extends Model
{
    public $timestamps = false;
    protected $table = 'lainattavat';


    public function kirja()
    {
        return $this->hasOne('App\kirja', 'id', 'kuvausID');

    }

}
