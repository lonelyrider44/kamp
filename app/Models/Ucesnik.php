<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Ucesnik extends Model implements JWTSubject
{
    use HasFactory;

    protected $fillable = [
            'prezime',
            'ime',
            'datum_rodjenja',
            'jmbg',
            'pasos',
            'email',
            'telefon',
            'adresa',
            'grad',
            'drzava',
            'pol_id',
            'mesto_id',
            'prezime_roditelja',
            'ime_roditelja',
            'telefon_roditelja',
            'email_roditelja',

    ];
    protected $dates = [
        'datum_rodjenja'
    ];

    public function ucesnik_kampova(){
        return $this->hasMany(\App\Models\UcesnikKampa::class,'ucesnik_id','id');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return ['role' => 'ucesnik','user_type' => 'ucesnik'];
    }
    public function updateOrCreateRoditelj(){
        $roditelj = \App\Models\Roditelj::updateOrCreate([
            'email' => $this->email_roditelja
        ],[
            'telefon' => $this->telefon_roditelja,
            'ime' => $this->ime_roditelja,
            'prezime' => $this->prezime_roditelja,
            'password' => $this->roditelj_sifra
        ]);

        $this->update(['id_roditelja' => $roditelj->id ]);
    }
}
