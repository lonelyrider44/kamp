<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ImportUcesnici extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('ucesnici')){
            \DB::beginTransaction();
            \DB::table('ucesnik_kampas')->delete();
            \DB::table('smenas')->delete();
            \DB::table('kamps')->delete();
            $kamp = \App\Models\Kamp::create([
                'naziv' => 'Valjevo 2022',
                'datum_od' => '2022-01-01',
                'datum_do' => '2022-12-31',
                'lokacija_id' => 1,
                'broj_prijava' => 500,
                'cena_smene' => 500
            ]);
            $prva_smena = \App\Models\Smena::create([
                'naziv' => 'Smena I',
                'datum_od' => '2022-01-01',
                'datum_do' => '2022-01-07',
                'broj_prijava' => 500,
                'cena' => 500,
                'kamp_id' => $kamp->id
            ]);
            $druga_smena = \App\Models\Smena::create([
                'naziv' => 'Smena II',
                'datum_od' => '2022-01-08',
                'datum_do' => '2022-01-14',
                'broj_prijava' => 500,
                'cena' => 500,
                'kamp_id' => $kamp->id
            ]);
            $ucesnici = \DB::table('ucesnici')->get()->map(function($ucesnik)use($kamp,$prva_smena, $druga_smena){
                $ucesnik->ime_i_prezime = explode(' ', $ucesnik->ime_i_prezime);
                $ucesnik_ime = (count($ucesnik->ime_i_prezime)>0)?$ucesnik->ime_i_prezime[0]:'';
                $ucesnik_prezime = (count($ucesnik->ime_i_prezime)>1)?$ucesnik->ime_i_prezime[1]:'';
                $ucesnik->ime_i_prezime_roditelja = explode(' ', $ucesnik->ime_i_prezime_roditelja);
                $roditelj_ime = (count($ucesnik->ime_i_prezime_roditelja)>0)?$ucesnik->ime_i_prezime_roditelja[0]:'';
                $roditelj_prezime = (count($ucesnik->ime_i_prezime_roditelja)>1)?$ucesnik->ime_i_prezime_roditelja[1]:'';
                $ucesnik->datum_rodjenja = explode('.',$ucesnik->datum_rodjenja);
                $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[0]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[2]}";
                return [
                    'ime' => $ucesnik_ime,
                    'prezime' => $ucesnik_prezime,
                    'ime_roditelja' => $roditelj_ime,
                    'prezime_roditelja' => $roditelj_prezime,
                    'email_roditelja' => $ucesnik->email_roditelja,
                    'telefon_roditelja' => $ucesnik->telefon_roditelja,
                    'datum_rodjenja' => $ucesnik->datum_rodjenja,
                    'jmbg' => $ucesnik->jmbg,
                    'depozit' => $ucesnik->depozit,
                    'pol' => ($ucesnik->pol=='Muški')?1:2,
                    'adresa' => $ucesnik->adresa,
                    'grad' => $ucesnik->grad,
                    'drzava' => $ucesnik->drzava,
                    'visina' => $ucesnik->visina,
                    'tezina' => $ucesnik->tezina,
                    'majica' => $ucesnik->majica,
                    'sorc' => $ucesnik->sorc,
                    'duks' => $ucesnik->duks,
                    'prijava' => $ucesnik->prijava,
                    'klub' => $ucesnik->klub,
                    'iskustvo' => $ucesnik->iskustvo,
                    'pozicija' => $ucesnik->pozicija,
                    'smena' => $ucesnik->smena,
                    'alergija_polen' => $ucesnik->alergija_polen,
                    'zdravstveni_problem' => $ucesnik->zdravstveni_problem,
                    'prevoz' => $ucesnik->prevoz,
                    'pet_treninga' => $ucesnik->pet_treninga,
                    'napomena_hrana' => $ucesnik->napomena_hrana,
                    'napomena_smestaj' => $ucesnik->napomena_smestaj,
                    'interna_napomena' => $ucesnik->interna_napomena,
                    'kamp_id' => $kamp->id,
                    'smena_id' => ($ucesnik->smena=="I smena")?$prva_smena->id:$druga_smena->id
                ];
            })->each(function($ucesnik, $key){
                $u= \App\Models\Ucesnik::where('jmbg', $ucesnik['jmbg'])->first();
                if(empty($u)){
                    $u = \App\Models\Ucesnik::create($ucesnik);
                }
                $u->ucesnik_kampova()->save(new \App\Models\UcesnikKampa($ucesnik));
            });

            \DB::commit();
            // ->dd();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
