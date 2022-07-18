<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaSaglasnost extends Model
{
    use HasFactory;

    protected $fillable = [
        'saglasnost_politika_privatnosti',
        'saglasnost_obrada_podataka',
        'saglasnost_ucesce_na_kampu',
        'saglasnost_donatorski_ugovor',
        'saglasnost_pravila_kampa'
    ];
}
