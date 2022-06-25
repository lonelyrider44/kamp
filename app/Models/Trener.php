<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trener extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'prezime',
        'ime',
        'email',
        'telefon',
        'password',
        'majica', 'sorc', 'duks', 'trenerka',
        'koordinator',
        'pol_id','komada','oprema_napomena'
    ];

    public function setPasswordAttribute($value){
        if(!empty($value)){
            $this->attributes['password'] = \Illuminate\Support\Facades\Hash::make($value);
        }
    }
}
