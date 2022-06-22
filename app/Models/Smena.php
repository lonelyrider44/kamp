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
    // protected $dates = [
    //     'datum_od','datum_do'
    // ];

    // protected $with = ['kamp'];
    
    public function kamp(){
        return $this->belongsTo(\App\Models\Kamp::class,'kamp_id');
    }
    public function scopeAktivne($query, $datum = null){
        if(empty($datum)){
            $datum = now();
        }
        return $query->whereDate('datum_od','<=', $datum)->whereDate('datum_do','>=',$datum);
    }
}
