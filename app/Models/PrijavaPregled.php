<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaPregled extends Model
{
    use HasFactory;

    protected $fillable = [
        'prijava_id',
        'lekar_id',
        'datum_pregleda',
        'napomena',
    ];

    public function lekar(){
        return $this->belongsTo(\App\Models\Lekar::class);
    }

    public function parametri(){
        return $this->hasMany(\App\Models\PrijavaPregledParametar::class);
    }
}
