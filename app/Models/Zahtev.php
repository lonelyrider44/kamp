<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zahtev extends Model
{
    use HasFactory;

    protected $fillable = ['zahtev','odgovor','kamp_id','smena_id','roditelj_id','ucesnik_id','status_id'];

    public function roditelj(){
        return $this->belongsTo(\App\Models\Roditelj::class);
    }
    public function ucesnik(){
        return $this->belongsTo(\App\Models\Ucesnik::class);
    }
    public function kamp(){
        return $this->belongsTo(\App\Models\Kamp::class);
    }
    public function smena(){
        return $this->belongsTo(\App\Models\Smena::class);
    }
    public function status_zahteva(){
        return $this->belongsTo(\App\Models\StatusZahteva::class,'status_id');
    }
}
