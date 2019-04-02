<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tekija extends Model
{

    protected $table = 'tekija';

    public function nimi()
    {
        return $this->belongsTo('App\kirja', 'tekijaID', 'id');
    }

}
