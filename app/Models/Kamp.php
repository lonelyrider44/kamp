<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamp extends Model
{
    use HasFactory;

    protected $fillable = [
        'lokacija_id','naziv','godina','broj_prijava','status', 'cena'
    ];
}
