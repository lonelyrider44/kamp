<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamp extends Model
{
    use HasFactory;

    protected $fillable = [
        'lokacija_id','naziv','broj_prijava','status', 'cena','datum_od','datum_do'
    ];

    // protected $casts = [
    //     'datum_od' => 'date',
    //     'datum_do' => 'date'
    // ];

    public function setDatumOdAttribute($value){
        $this->attributes['datum_od'] = \Carbon\Carbon::parse($value);
    }
    public function setDatumDoAttribute($value){
        $this->attributes['datum_do'] = \Carbon\Carbon::parse($value);
    }
}
