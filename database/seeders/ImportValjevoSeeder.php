<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ImportValjevoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (\Illuminate\Support\Facades\Schema::hasTable('ucesnici')) {
            \DB::beginTransaction();
            \DB::table('smenas')->delete();
            \DB::table('kamps')->delete();
            $kamp = \App\Models\Kamp::create([
                'naziv' => 'Letnji kamp Valjevo 2022',
                'datum_od' => '2022-01-01',
                'datum_do' => '2022-12-31',
                'lokacija_id' => 875,
                'broj_prijava' => 125,
                // 'cena_smene' => 500,
                'cena_smene_rsd' => 300*118,
                'cena_smene_eur' => 300,
                'depozit_rsd' => 6000,
                'depozit_eur' => 50,
                'broj_prijava' => 50*118,
                'status_id' => 1
            ]);
            $prva_smena = \App\Models\Smena::create([
                'naziv' => 'I smena',
                'datum_od' => '2022-06-25',
                'datum_do' => '2022-07-02',
                'kamp_id' => $kamp->id
            ]);
            $druga_smena = \App\Models\Smena::create([
                'naziv' => 'II smena',
                'datum_od' => '2022-07-02',
                'datum_do' => '2022-07-09',
                'kamp_id' => $kamp->id
            ]);
            $treca_smena = \App\Models\Smena::create([
                'naziv' => 'III smena',
                'datum_od' => '2022-07-09',
                'datum_do' => '2022-07-16',
                'kamp_id' => $kamp->id
            ]);
            $cetvrta_smena = \App\Models\Smena::create([
                'naziv' => 'IV smena',
                'datum_od' => '2022-07-16',
                'datum_do' => '2022-07-23',
                'kamp_id' => $kamp->id
            ]);
            $peta_smena = \App\Models\Smena::create([
                'naziv' => 'V smena',
                'datum_od' => '2022-07-23',
                'datum_do' => '2022-07-30',
                'kamp_id' => $kamp->id
            ]);
            $peta_smena = \App\Models\Smena::create([
                'naziv' => 'VI smena',
                'datum_od' => '2022-07-30',
                'datum_do' => '2022-08-06',
                'kamp_id' => $kamp->id
            ]);
            $prvi_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'ORTOPEDIJA - Izrada individualnih vežbi',
                'opis' => 'Izrada individualnih vežbi na osnovu analize ortopedskog testiranja za polaznike/polaznice kampa zarad sopstvene posture-pravilnog držanja tela i eliminacije disbalansa',
                'iznos_rsd' => 20*118,
                'iznos_eur' => 20,
                'kamp_id' => $kamp->id
            ]);
            $drugi_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'ORTOPEDIJA - Individualno vežbanje sa fizioterapeutom',
                'opis' => 'Individualno vežbanje sa fizioterapeutom po izrađenom programu vežbi gde dete nauči da radi vežbe koje će nastaviti da radi kod kuće (5 treninga nedeljno)',
                'iznos_rsd' => 50*118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $treci_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'REHABILITACIJA POVREDA - Individualna rehabilitacija sa fizioterapeutom',
                'opis' => 'Individualna rehabilitacija sa fizioterapeutom - povrede i deformiteti (kifoza, skolioza, lordoza, ravna stopala,...). 5 treninga nedeljno',
                'iznos_rsd' => 50*118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $cetvrti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'REHABILITACIJA POVREDA - Edukacija i osposobljavanje za jačanje tela',
                'opis' => 'Edukacija i osposobljavanje za jačanje tela, individualni rad sa fizioterapeutom Ambulante za rehabilitaciju GB Medic ,Goranom Blagojevićem, učenje pravilne tehnike u teretani (kondicioniranje). 5 treninga nedeljno.',
                'iznos_rsd' => 50*118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $peti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'INDIVIDUALNI SNIMAK SA KAMPA',
                'opis' => 'Izrada individualnog video zapisa sa kampa sa snimateljem/rediteljem Nemanjom Obradovićem iz Studio 4x4',
                'iznos_rsd' => 50*118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $sesti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'DODATNI TRENINZI',
                'opis' => 'Dodatni (individualni treninzi) na korekciji tehnike i poboljšanju elemenata igre za decu 12god i više (2010 i stariji). Rad u grupama do 5 ili individualno u zavisnosti od potrebe i željenog elementa pod nadzorom (učešćem Vladimira Grbića) 5 treninga nedeljno',
                'iznos_rsd' => 100*118,
                'iznos_eur' => 100,
                'kamp_id' => $kamp->id
            ]);
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Beograd - Valjevo, oba pravca', 'cena_rsd'=>1300, 'cena_eur'=>10]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Beograd-Valjevo', 'cena_rsd'=>800, 'cena_eur'=>7]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Valjevo-Beograd', 'cena_rsd'=>800, 'cena_eur'=>7]));

            $ucesnici = \DB::table('valjevo2022ukupno')->get()->map(function ($ucesnik) use ($kamp, $prva_smena, $druga_smena,$treca_smena, $cetvrta_smena, $peta_smena) {
                $ucesnik->ime_prezime = explode(' ', $ucesnik->ime_prezime);
                if(count($ucesnik->ime_prezime)>2){
                    // dd($ucesnik->ime_prezime);

                    throw new \Exception($ucesnik->ime_prezime);
                }
                    
                $ucesnik_ime = (count($ucesnik->ime_prezime) > 0) ? $ucesnik->ime_prezime[0] : '';
                $ucesnik_prezime = (count($ucesnik->ime_prezime) > 1) ? $ucesnik->ime_prezime[1] : '';
                $ucesnik->ime_prezime_roditelj = explode(' ', $ucesnik->ime_prezime_roditelj);
                if(count($ucesnik->ime_prezime_roditelj)>2) dd($ucesnik->ime_prezime_roditelj);
                $roditelj_ime = (count($ucesnik->ime_prezime_roditelj) > 0) ? $ucesnik->ime_prezime_roditelj[0] : '';
                $roditelj_prezime = (count($ucesnik->ime_prezime_roditelj) > 1) ? $ucesnik->ime_prezime_roditelj[1] : '';
                $ucesnik->datum_rodjenja = explode('/', $ucesnik->datum_rodjenja);
                if(strlen($ucesnik->datum_rodjenja[0])==4){
                    $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[0]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[2]}";
                }elseif(strlen($ucesnik->datum_rodjenja[2])==4){
                    $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[2]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[0]}";
                }else{
                    dd($ucesnik->datum_rodjenja);
                }
                $smena_id = null;
                if($prva_smena->naziv==$ucesnik->smena) $smena_id = $prva_smena->id;
                if($druga_smena->naziv==$ucesnik->smena) $smena_id = $druga_smena->id;
                if($treca_smena->naziv==$ucesnik->smena) $smena_id = $treca_smena->id;
                if($cetvrta_smena->naziv==$ucesnik->smena) $smena_id = $cetvrta_smena->id;
                if($peta_smena->naziv==$ucesnik->smena) $smena_id = $peta_smena->id;

                if(empty($smena_id)) dd($ucesnik->smena);
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
                    'grad' => $ucesnik->grad,
                    'drzava' => $ucesnik->drzava,
                    'visina' => $ucesnik->visina,
                    'tezina' => $ucesnik->tezina,
                    'majica' => \App\Models\Velicina::where('naziv',$ucesnik->majica)->first()->id,
                    'sorc' => \App\Models\Velicina::where('naziv',$ucesnik->sorc)->first()->id,
                    'duks' => \App\Models\Velicina::where('naziv',$ucesnik->duks)->first()->id,
                    // 'trenerka' => \App\Models\Velicina::where('naziv',$ucesnik->sorc)->first()->id,
                    'prijava' => $ucesnik->prijava,
                    'klub' => $ucesnik->klub,
                    'iskustvo' => $ucesnik->iskustvo,
                    'pozicija' => $ucesnik->pozicija,
                    'smena' => $ucesnik->smena,
                    'alergija_polen' => $ucesnik->alergija_polen,
                    'zdravstveni_problem' => $ucesnik->zdravstveni_problem,
                    'tip_prevoza_id' => ($ucesnik->prevoz=='Samostalno')?1:2,
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
                $prijava = \App\Models\Prijava::create($ucesnik);
                $prijava->smene()->sync([$ucesnik['smena_id'] => ['status_id' => 1]]);
                $prijava->updateCena();
            });

            \DB::commit();
            // ->dd();
        }
    }
}
