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
            'jmbg_pasos',
            'pasos',
            'email',
            'telefon',
            'adresa',
            'grad',
            'mesto',
            'drzava',
            'pol_id',
            'mesto_id',
            'prezime_roditelja',
            'ime_roditelja',
            'telefon_roditelja',
            'email_roditelja',
            'roditelj_id'

    ];
    // protected $dates = [
    //     'datum_rodjenja'
    // ];

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

        $this->update(['roditelj_id' => $roditelj->id ]);
    }
    public function setMestoAttribute($value){
        $this->attributes['grad']=$value;
    }

    public function scopeZaKamp($query, $kamp){
        return $query->whereIn('id', function($query)use($kamp){
            $query->select('prijavas.ucesnik_id')
                ->from('prijavas')
                ->where('prijavas.kamp_id',$kamp->id);
        });
    }
    public function scopeZaSmenu($query, $smena){
        return $query->whereIn('id', function($query)use($smena){
            $query->select('prijavas.ucesnik_id')
                ->from('prijavas')
                ->whereIn('prijavas.id',function($query)use($smena){
                    $query->select('prijava_smenas.prijava_id')
                        ->from('prijava_smenas')
                        ->where('prijava_smenas.smena_id', $smena->id);
                });
        });
    }
}
