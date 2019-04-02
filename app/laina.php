<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class laina extends Model
{
    protected $table = 'lainat';

    public function lainattava()
    {
        return $this->hasOne('App\lainattava', 'id', 'lainattavaID');

    }

}
