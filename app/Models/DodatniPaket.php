<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DodatniPaket extends Model
{
    use HasFactory;

    protected $fillable = [
        'naziv',
        'opis',
        'iznos_rsd',
        'iznos_eur',
        'kamp_id'
    ];
}
