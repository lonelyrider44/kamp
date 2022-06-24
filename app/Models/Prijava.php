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
        'roditelj_id',
        'status_id',
        'trener_id',

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
        'grad',
        'mesto',
        'drzava',

        'visina',
        'tezina',

        'alergije',
        'zdravstveni_problem',

        'majica',
        'sorc',
        'duks',
        // 'trenerka',

        'napomena_smestaj',
        'napomena_hrana',
        'napomena_zdravstveni_problemi',
        'napomena_alergije',

        // 'prevoz',
        'tip_prevoza_id',
        'organizovani_prevoz',

        'broj_sobe',

        'saglasnost_politika_privatnosti',
        'saglasnost_obrada_podataka',
        'saglasnost_ucesce_na_kampu',
        'saglasnost_donatorski_ugovor',
        'saglasnost_pravila_kampa',

        'donosi_depozit_u_kamp',
        'depozit_napomena',
        'opstina',
        'gratis',
        'pregled_obavljen',

        'depozit_rsd',
        'depozit_eur',
        
        // 'depozit_rsd',
        // 'smene_rsd',
        // 'dodatni_paketi_rsd',
        // 'opstina_rsd',
        // 'ukupno_rsd',

        // 'depozit_eur',
        // 'smene_eur',
        // 'dodatni_paketi_eur',
        // 'opstina_eur',
        // 'ukupno_eur',

        'ukupno_smene_rsd',
        'ukupno_smene_eur',
        'ukupno_dodatni_paketi_rsd',
        'ukupno_dodatni_paketi_eur',
        'ukupno_rsd',
        'ukupno_eur'
    ];

    // protected $casts = [
    //     'datum_rodjenja' => 'date'

    // ];
    // protected $dates = [
    //     'datum_rodjenja'
    // ];
    // protected $casts = [
    //     'datum_rodjenja' => 'date:d.m.Y.'
    // ];
    protected $with = ['kamp', 'smene', 'dodatni_paketi'];

    public function smene()
    {
        return $this->belongsToMany(\App\Models\Smena::class, 'prijava_smenas', 'prijava_id', 'smena_id');
    }
    public function dodatni_paketi()
    {
        return $this->belongsToMany(\App\Models\DodatniPaket::class, 'prijava_paketis', 'prijava_id', 'dodatni_paket_id');
    }
    public function kamp()
    {
        return $this->belongsTo(\App\Models\Kamp::class, 'kamp_id');
    }
    public function setGradAttribute($value)
    {
        $this->attributes['mesto'] = $value;
    }
    public function updateCena()
    {
        $ukupno_smene_rsd = $this->kamp->cena_smene_rsd * $this->smene->count();
        $ukupno_smene_eur = $this->kamp->cena_smene_eur * $this->smene->count();
        $ukupno_dodatni_paketi_rsd = 0;
        $ukupno_dodatni_paketi_eur = 0;
        $this->dodatni_paketi->each(function ($dp) use (&$ukupno_dodatni_paketi_rsd, &$ukupno_dodatni_paketi_eur) {
            $ukupno_dodatni_paketi_eur += $dp->iznos_eur;
            $ukupno_dodatni_paketi_rsd += $dp->iznos_rsd;
        });
        $this->update([
            'ukupno_smene_rsd' => $ukupno_smene_rsd,
            'ukupno_smene_eur' => $ukupno_smene_eur,
            'ukupno_dodatni_paketi_rsd' => $ukupno_dodatni_paketi_rsd,
            'ukupno_dodatni_paketi_eur' => $ukupno_dodatni_paketi_eur,
            'ukupno_rsd' => $ukupno_smene_rsd + $ukupno_dodatni_paketi_rsd,
            'ukupno_eur' => $ukupno_smene_eur + $ukupno_dodatni_paketi_eur,
        ]);
    }
}
