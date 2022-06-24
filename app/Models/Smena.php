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
    public function prijave(){
        return $this->hasMany(\App\Models\PrijavaSmena::class, 'smena_id')
            ->whereIn('prijava_smenas.prijava_id', function($query){
                $query->select('prijavas.id')
                ->from('prijavas')
                ->where('prijavas.status_id',1);
            });
    }
    public function scopeAktivne($query, $datum = null){
        if(empty($datum)){
            $datum = now();
        }
        return $query->whereDate('datum_od','>=', $datum)->orWhereDate('datum_do','>=',$datum);
    }
}
