<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prijava extends Model
{
    use HasFactory;
    protected $fillable = [
        'kamp_id',
        'ucesnik_id',
        'status_id',

        'ime_roditelja',
        'prezime_roditelja',
        'email_roditelja',
        'telefon_roditelja',

        'ime',
        'prezime',
        'email',
        'telefon',

        // 'Pol',
        'pol_id',
        'datum_rodjenja',
        'jmbg_pasos',

        'adresa',
        'mesto',
        'drzava',

        'visina',
        'tezina',

        'alergije',
        'zdravstveni_problem',

        'majica',
        'sorc',
        'duks',
        'trenerka',

        'napomena_smestaj',
        'napomena_hrana',
        'napomena_zdravstveni_problemi',
        'napomena_alergije',

        'prevoz',

        'saglasnost_politika_privatnosti',
        'saglasnost_obrada_podataka',
        'saglasnost_ucesce_na_kampu',
        'saglasnost_donatorski_ugovor',
        'saglasnost_pravila_kampa',

        'depozit_rsd',
        'depozit_eur',
    ];

    // protected $casts = [
    //     'datum_rodjenja' => 'date'

    // ];
    protected $dates = [
        'datum_rodjenja'
    ];
    protected $with = ['kamp', 'smene', 'dodatni_paketi'];

    public function smene()
    {
        return $this->belongsToMany(\App\Models\Smena::class, 'prijava_smenas', 'prijava_id', 'smena_id');
    }
    public function dodatni_paketi()
    {
        return $this->belongsToMany(\App\Models\DodatniPaket::class, 'prijava_paketis', 'prijava_id', 'dodatni_paket_id');
    }
    public function kamp(){
        return $this->belongsTo(\App\Models\Kamp::class,'kamp_id');
    }

    public function updateOrCreateUcesnik()
    {
        $ucesnik = \App\Models\Ucesnik::updateOrCreate(
            ['email' => $this->email],
            $this->toArray()
        );
        $ucesnik->updateOrCreateRoditelj();
        $this->update(['id_ucesnika' => $ucesnik->id]);
    }
}
