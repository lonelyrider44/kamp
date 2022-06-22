<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Uplata extends Model
{
    use HasFactory;

    protected $fillable = [
        'prijava_id',
        'kamp_id',
        'smena_id',
        'ucesnik_id',
        // 'status_uplate_id',
        'datum_uplate',
        'iznos_rsd',
        'iznos_eur',
        'depozit'
    ];

    public function kamp()
    {
        return $this->belongsTo(\App\Models\Kamp::class);
    }
    public function smena()
    {
        return $this->belongsTo(\App\Models\Smena::class);
    }
    public function ucesnik()
    {
        return $this->belongsTo(\App\Models\Ucesnik::class);
    }

    public function getRouteKeyName()
    {
        return 'id';
    }
}
