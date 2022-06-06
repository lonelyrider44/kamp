<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamp extends Model
{
    use HasFactory;

    protected $fillable = [
        'lokacija_id', 'naziv', 'broj_prijava', 'smestaj',
        'cena_smene', 'cena_smene_rsd', 'cena_smene_eur', 'status_id'
        // 'datum_od','datum_do'
    ];
    protected $with = ['smene', 'aktivne_smene','dodatni_paketi', 'organizovani_prevoz', 'lokacija'];

    // protected $casts = [
    //     'datum_od' => 'date',
    //     'datum_do' => 'date'
    // ];

    public function setDatumOdAttribute($value)
    {
        $this->attributes['datum_od'] = \Carbon\Carbon::parse($value);
    }
    public function setDatumDoAttribute($value)
    {
        $this->attributes['datum_do'] = \Carbon\Carbon::parse($value);
    }

    public function lokacija()
    {
        return $this->belongsTo(\App\Models\Mesto::class, 'lokacija_id');
    }
    public function ucesnici_kampa()
    {
        return $this->hasMany(\App\Models\UcesnikKampa::class, 'kamp_id', 'id');
    }
    public function smene()
    {
        return $this->hasMany(\App\Models\Smena::class);
    }
    public function aktivne_smene()
    {
        return $this->hasMany(\App\Models\Smena::class)->aktivne();
    }
    public function dodatni_paketi()
    {
        return $this->hasMany(\App\Models\DodatniPaket::class, 'kamp_id', 'id');
    }
    public function organizovani_prevoz()
    {
        return $this->hasMany(\App\Models\OrganizovaniPrevoz::class, 'kamp_id', 'id');
    }
    public function scopeAktivni($query, $datum = null)
    {
        // return $query->where('status_id', 1);
        if (empty($datum)) {
            $datum = now();
        }
        return $query->where('status_id', 1)
            ->whereIn('kamps.id', \App\Models\Smena::aktivne($datum)->toBase()->get()->pluck('kamp_id'));
        // return $query->where('status_id', 1)->whereIn('kamps.id', \App\Models\Smena::aktivne($datum)->toBase()->get()->pluck('kamp_id'));
    }
}
