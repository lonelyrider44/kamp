<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UcesnikKampa extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'ucesnik_id',
        'kamp_id',
        'trener_id',
        'user_id',
        'smena_id',

        // 'ime',
        // 'prezime',
        // 'email',
        // 'telefon',
        // 'Pol',
        // 'datum_rodjenja',
        // 'jmbg',
        // 'pasos',
        // 'adresa',
        // 'mesto_id',
        // 'drzava_id',
        // 'trenira_odbojku',
        
        // 'ime_roditelja',
        // 'prezime_roditelja',
        // 'email_roditelja',
        // 'telefon_roditelja',

        'visina',
        'tezina',
        'alergije',
        'zdravstveni_problem',
        'napomena_hrana',
        
        'majica',
        'sorc',
        'duks',
        'trenerka',
        
        'hotel_id',
        'broj_sobe',
        'prevoz',
        'napomena_smestaj',
        
        'rezim',
        'status',
        'gratis'
    ];
}
