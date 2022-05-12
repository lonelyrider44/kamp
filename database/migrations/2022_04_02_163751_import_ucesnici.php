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
        if (Schema::hasTable('ucesnici')) {
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
                // 'cena_smene' => 500,
                'cena_smene_rsd' => 50000,
                'cena_smene_eur' => 500,
                'broj_prijava' => 500,
            ]);
            $prva_smena = \App\Models\Smena::create([
                'naziv' => 'Smena I',
                'datum_od' => '2022-01-01',
                'datum_do' => '2022-01-07',
                'kamp_id' => $kamp->id
            ]);
            $druga_smena = \App\Models\Smena::create([
                'naziv' => 'Smena II',
                'datum_od' => '2022-01-08',
                'datum_do' => '2022-01-14',
                'kamp_id' => $kamp->id
            ]);
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Oba pravca', 'cena_rsd'=>'1300', 'cena_eur'=>10]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Beograd-Valjevo', 'cena_rsd'=>'800', 'cena_eur'=>7]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Valjevo-Beograd', 'cena_rsd'=>'800', 'cena_eur'=>7]));
            $ucesnici = \DB::table('ucesnici')->get()->map(function ($ucesnik) use ($kamp, $prva_smena, $druga_smena) {
                $ucesnik->ime_i_prezime = explode(' ', $ucesnik->ime_i_prezime);
                $ucesnik_ime = (count($ucesnik->ime_i_prezime) > 0) ? $ucesnik->ime_i_prezime[0] : '';
                $ucesnik_prezime = (count($ucesnik->ime_i_prezime) > 1) ? $ucesnik->ime_i_prezime[1] : '';
                $ucesnik->ime_i_prezime_roditelja = explode(' ', $ucesnik->ime_i_prezime_roditelja);
                $roditelj_ime = (count($ucesnik->ime_i_prezime_roditelja) > 0) ? $ucesnik->ime_i_prezime_roditelja[0] : '';
                $roditelj_prezime = (count($ucesnik->ime_i_prezime_roditelja) > 1) ? $ucesnik->ime_i_prezime_roditelja[1] : '';
                $ucesnik->datum_rodjenja = explode('.', $ucesnik->datum_rodjenja);
                $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[0]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[2]}";
                
                return [
                    'ime' => $ucesnik_ime,
                    'prezime' => $ucesnik_prezime,
                    'ime_roditelja' => $roditelj_ime,
                    'prezime_roditelja' => $roditelj_prezime,
                    'email_roditelja' => $ucesnik->email_roditelja,
                    'telefon_roditelja' => $ucesnik->telefon_roditelja,
                    'datum_rodjenja' => $ucesnik->datum_rodjenja,
                    'jmbg_pasos' => $ucesnik->jmbg,
                    'depozit' => $ucesnik->depozit,
                    'pol_id' => ($ucesnik->pol == 'Muški') ? 1 : 2,
                    'adresa' => $ucesnik->adresa,
                    'mesto' => $ucesnik->grad,
                    'drzava' => $ucesnik->drzava,
                    'visina' => $ucesnik->visina,
                    'tezina' => $ucesnik->tezina,
                    'majica' => \App\Models\Velicina::where('naziv',$ucesnik->majica)->first()->id,
                    'sorc' => \App\Models\Velicina::where('naziv',$ucesnik->sorc)->first()->id,
                    'duks' => \App\Models\Velicina::where('naziv',$ucesnik->duks)->first()->id,
                    'trenerka' => \App\Models\Velicina::where('naziv',$ucesnik->sorc)->first()->id,
                    'prijava' => $ucesnik->prijava,
                    'klub' => $ucesnik->klub,
                    'iskustvo' => $ucesnik->iskustvo,
                    'pozicija' => $ucesnik->pozicija,
                    'smena' => $ucesnik->smena,
                    'alergija_polen' => $ucesnik->alergija_polen,
                    'zdravstveni_problem' => $ucesnik->zdravstveni_problem,
                    'prevoz' => ($ucesnik->prevoz=='Samostalno')?1:2,
                    'organizovani_prevoz' => ($ucesnik->prevoz!='Samostalno')?\App\Models\OrganizovaniPrevoz::where('naziv',$ucesnik->prevoz)->first()->id:null,
                    'pet_treninga' => $ucesnik->pet_treninga,
                    'napomena_hrana' => $ucesnik->napomena_hrana,
                    'napomena_smestaj' => $ucesnik->napomena_smestaj,
                    'interna_napomena' => $ucesnik->interna_napomena,
                    'kamp_id' => $kamp->id,
                    'smena_id' => ($ucesnik->smena == "I smena") ? $prva_smena->id : $druga_smena->id,
                    'saglasnost_politika_privatnosti' => true,
                    'saglasnost_obrada_podataka' => true,
                    'saglasnost_ucesce_na_kampu' => true,
                    'saglasnost_donatorski_ugovor' => true,
                    'saglasnost_pravila_kampa' => true,

                    'napomena_zdravstveni_problemi' => $ucesnik->zdravstveni_problem,
                    'napomena_alergije' => $ucesnik->alergija_polen,

                    'smena_id' => ($ucesnik->smena=="I smena")?$prva_smena->id:$druga_smena->id
                ];
            })->each(function ($ucesnik, $key) {
                // $u= \App\Models\Ucesnik::where('jmbg', $ucesnik['jmbg'])->first();

                // if(empty($u)){
                //     $u = \App\Models\Ucesnik::create($ucesnik);
                // }
                // $u->ucesnik_kampova()->save(new \App\Models\UcesnikKampa($ucesnik));
                $prijava = \App\Models\Prijava::create($ucesnik);
                $prijava->smene()->sync([$ucesnik['smena_id']]);
                // $prijava_smena = \App\Models\PrijavaSmena::create([
                //     'prijava_id' => $prijava->id,
                //     'smena_id' => $ucesnik['smena_id']
                // ]);
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
