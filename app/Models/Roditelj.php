<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Roditelj extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = [
       'email',
       'telefon',
       'ime',
       'prezime',
       'password',
    ];
    public function setPasswordAttribute($value){
        if(!empty($value)){
            $this->attributes['password'] = \Illuminate\Support\Facades\Hash::make($value);
        }
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
        return "parent-{$this->getKey()}";
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return ['role' => 'roditelj','user_type' => 'roditelj'];
    }

    public function ucesnici(){
        return $this->hasMany(\App\Models\Ucesnik::class);
    }
}
