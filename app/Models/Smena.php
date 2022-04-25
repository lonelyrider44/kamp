<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Smena extends Model
{
    use HasFactory;

    protected $fillable = [
        'naziv','kamp_id','datum_od','datum_do',
        // 'cena'
    ];
    protected $dates = [
        'datum_od','datum_do'
    ];
}
