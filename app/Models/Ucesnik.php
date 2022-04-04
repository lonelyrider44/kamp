<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ucesnik extends Model
{
    use HasFactory;

    protected $fillable = [
            'prezime',
            'ime',
            'datum_rodjenja',
            'jmbg',
            'pasos',
            'email',
            'telefon',
            'adresa',
            'grad',
            'drzava',
            'pol',
            'mesto_id',
            'prezime_roditelja',
            'ime_roditelja',
            'telefon_roditelja',
            'email_roditelja',

    ];

    public function ucesnik_kampova(){
        return $this->hasMany(\App\Models\UcesnikKampa::class,'ucesnik_id','id');
    }
}
