<?php

namespace App\Http\Controllers;

use App\Models\PrijavaSmena;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function angular()
    {
        return view('angular');
    }

    public function exec_safe($f, $message = null)
    {
        try {
            \DB::beginTransaction();
            $json_response = $f();
            \DB::commit();
            if(!empty($json_response)){
                return response()->json($json_response,500);
            }else{
                return response()->json([
                    'message' => $message ?? "Operacija uspešna"
                ]);
            }
        } catch (\Exception $e) {
            \DB::rollback();
            return
                response()->json([
                    'message' => $e->getMessage()
                ], 500);
        }
    }

    public function import_valjevo()
    {
        if (\Illuminate\Support\Facades\Schema::hasTable('valjevo2022ukupno')) {

            \DB::beginTransaction();
            \DB::table('smenas')->delete();
            \DB::table('kamps')->delete();
            // dd('stop');
            $kamp = \App\Models\Kamp::create([
                'naziv' => 'Letnji kamp Valjevo 2022',
                'datum_od' => '2022-01-01',
                'datum_do' => '2022-12-31',
                'lokacija_id' => 875,
                'smestaj' => 'Omni park',
                'broj_prijava' => 125,
                // 'cena_smene' => 500,
                'cena_smene_rsd' => 300 * 118,
                'cena_smene_eur' => 300,
                'depozit_rsd' => 50 * 118,
                'depozit_eur' => 50,
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
            $sesta_smena = \App\Models\Smena::create([
                'naziv' => 'VI smena',
                'datum_od' => '2022-07-30',
                'datum_do' => '2022-08-06',
                'kamp_id' => $kamp->id
            ]);
            $prvi_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'ORTOPEDIJA - Izrada individualnih vežbi',
                'opis' => 'Izrada individualnih vežbi na osnovu analize ortopedskog testiranja za polaznike/polaznice kampa zarad sopstvene posture-pravilnog držanja tela i eliminacije disbalansa',
                'iznos_rsd' => 20 * 118,
                'iznos_eur' => 20,
                'kamp_id' => $kamp->id
            ]);
            $drugi_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'ORTOPEDIJA - Individualno vežbanje sa fizioterapeutom',
                'opis' => 'Individualno vežbanje sa fizioterapeutom po izrađenom programu vežbi gde dete nauči da radi vežbe koje će nastaviti da radi kod kuće (5 treninga nedeljno)',
                'iznos_rsd' => 50 * 118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $treci_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'REHABILITACIJA POVREDA - Individualna rehabilitacija sa fizioterapeutom',
                'opis' => 'Individualna rehabilitacija sa fizioterapeutom - povrede i deformiteti (kifoza, skolioza, lordoza, ravna stopala,...). 5 treninga nedeljno',
                'iznos_rsd' => 50 * 118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $cetvrti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'REHABILITACIJA POVREDA - Edukacija i osposobljavanje za jačanje tela',
                'opis' => 'Edukacija i osposobljavanje za jačanje tela, individualni rad sa fizioterapeutom Ambulante za rehabilitaciju GB Medic ,Goranom Blagojevićem, učenje pravilne tehnike u teretani (kondicioniranje). 5 treninga nedeljno.',
                'iznos_rsd' => 50 * 118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $peti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'INDIVIDUALNI SNIMAK SA KAMPA',
                'opis' => 'Izrada individualnog video zapisa sa kampa sa snimateljem/rediteljem Nemanjom Obradovićem iz Studio 4x4',
                'iznos_rsd' => 50 * 118,
                'iznos_eur' => 50,
                'kamp_id' => $kamp->id
            ]);
            $sesti_dp = \App\Models\DodatniPaket::create([
                'naziv' => 'DODATNI TRENINZI',
                'opis' => 'Dodatni (individualni treninzi) na korekciji tehnike i poboljšanju elemenata igre za decu 12god i više (2010 i stariji). Rad u grupama do 5 ili individualno u zavisnosti od potrebe i željenog elementa pod nadzorom (učešćem Vladimira Grbića) 5 treninga nedeljno',
                'iznos_rsd' => 100 * 118,
                'iznos_eur' => 100,
                'kamp_id' => $kamp->id
            ]);
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Beograd - Valjevo, oba pravca', 'cena_rsd' => 1300, 'cena_eur' => 10]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Beograd-Valjevo', 'cena_rsd' => 800, 'cena_eur' => 7]));
            $kamp->organizovani_prevoz()->save(new \App\Models\OrganizovaniPrevoz(['naziv' => 'Valjevo-Beograd', 'cena_rsd' => 800, 'cena_eur' => 7]));

            // dd('stop');
            $ucesnici = \DB::table('valjevo2022ukupno')->get()
                ->map(function ($ucesnik)
                use (
                    $kamp,
                    $prva_smena,
                    $druga_smena,
                    $treca_smena,
                    $cetvrta_smena,
                    $peta_smena,
                    $sesta_smena,
                    $prvi_dp,
                    $drugi_dp,
                    $treci_dp,
                    $cetvrti_dp,
                    $peti_dp,
                    $sesti_dp
                ) {
                    // dd('stop');
                    $ucesnik->ime_prezime = explode(' ', $ucesnik->ime_prezime);
                    $ucesnik_ime = (count($ucesnik->ime_prezime) > 0) ? $ucesnik->ime_prezime[0] : '';
                    $ucesnik_prezime = (count($ucesnik->ime_prezime) > 1) ? $ucesnik->ime_prezime[1] : '';
                    if (count($ucesnik->ime_prezime) > 2) {
                        $ucesnik_prezime .= " {$ucesnik->ime_prezime[2]}";
                        // dd($ucesnik->ime_prezime);

                        // throw new \Exception($ucesnik->ime_prezime);
                    }

                    $ucesnik->ime_prezime_roditelj = explode(' ', $ucesnik->ime_prezime_roditelj);
                    $roditelj_ime = (count($ucesnik->ime_prezime_roditelj) > 0) ? $ucesnik->ime_prezime_roditelj[0] : '';
                    $roditelj_prezime = (count($ucesnik->ime_prezime_roditelj) > 1) ? $ucesnik->ime_prezime_roditelj[1] : '';
                    if (count($ucesnik->ime_prezime_roditelj) > 2) $roditelj_prezime .= " {$ucesnik->ime_prezime_roditelj[2]}";

                    if (\Str::contains($ucesnik->datum_rodjenja, '/')) {
                        $ucesnik->datum_rodjenja = explode('/', $ucesnik->datum_rodjenja);
                    } elseif (\Str::contains($ucesnik->datum_rodjenja, '-')) {
                        $ucesnik->datum_rodjenja = explode('-', $ucesnik->datum_rodjenja);
                    } else {
                        dd("Datum rodjenja", $ucesnik);
                    }
                    if (count($ucesnik->datum_rodjenja) != 3) {

                        dd($ucesnik->datum_rodjenja);
                    }
                    if (strlen($ucesnik->datum_rodjenja[0]) == 4) {
                        $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[0]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[2]}";
                    } elseif (strlen($ucesnik->datum_rodjenja[2]) == 4) {
                        $ucesnik->datum_rodjenja = "{$ucesnik->datum_rodjenja[2]}-{$ucesnik->datum_rodjenja[1]}-{$ucesnik->datum_rodjenja[0]}";
                    } else {
                        dd("Datum rodjenja", $ucesnik->datum_rodjenja);
                    }
                    $smena_id = null;
                    if ($prva_smena->naziv == $ucesnik->smena) $smena_id = $prva_smena->id;
                    if ($druga_smena->naziv == $ucesnik->smena) $smena_id = $druga_smena->id;
                    if ($treca_smena->naziv == $ucesnik->smena) $smena_id = $treca_smena->id;
                    if ($cetvrta_smena->naziv == $ucesnik->smena) $smena_id = $cetvrta_smena->id;
                    if ($peta_smena->naziv == $ucesnik->smena) $smena_id = $peta_smena->id;
                    if ($sesta_smena->naziv == $ucesnik->smena) $smena_id = $sesta_smena->id;

                    if (empty($smena_id)) dd("Smena", $ucesnik->smena);

                    $ucesnik->telefon_roditelj = \Str::replace('Err:509', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('3.82E+11', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('3.82E+10', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('3.81638E+11', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('#N/A', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('#ERROR!', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('3.81641E+11', '', $ucesnik->telefon_roditelj);
                    $ucesnik->telefon_roditelj = \Str::replace('3.88E+10', '', $ucesnik->telefon_roditelj);

                    $dodatni_paketi = [];
                    if ($ucesnik->ortopedija_izrada_vezbi == "da") $dodatni_paketi[] = $prvi_dp->id;
                    if ($ucesnik->ortopedija_vezbanje == "da") $dodatni_paketi[] = $drugi_dp->id;
                    if ($ucesnik->rehabilitacija_vezbanje == "da") $dodatni_paketi[] = $treci_dp->id;
                    if ($ucesnik->rehabilitacija_ucenje == "da") $dodatni_paketi[] = $cetvrti_dp->id;
                    if ($ucesnik->video_smene == "da") $dodatni_paketi[] = $peti_dp->id;
                    if ($ucesnik->dodatni_treninzi == "da") $dodatni_paketi[] = $sesti_dp->id;
                    $ucesnik->jmbg_pasos = trim($ucesnik->jmbg_pasos);
                    $ucesnik->jmbg_pasos = !empty($ucesnik->jmbg_pasos) ? $ucesnik->jmbg_pasos : null;
                    return [
                        'ime' => $ucesnik_ime,
                        'prezime' => $ucesnik_prezime,
                        'ime_roditelja' => $roditelj_ime,
                        'prezime_roditelja' => $roditelj_prezime,
                        'email_roditelja' => $ucesnik->email_roditelj,
                        'email' => $ucesnik->email,
                        'telefon_roditelja' => !empty($ucesnik->telefon_roditelj) ? $ucesnik->telefon_roditelj : null,
                        'datum_rodjenja' => $ucesnik->datum_rodjenja,
                        'jmbg_pasos' => $ucesnik->jmbg_pasos,
                        'depozit' => $ucesnik->depozit,
                        'depozit_napomena' => $ucesnik->depozit,
                        'pol_id' => ($ucesnik->pol == 'Muški') ? 1 : 2,
                        'adresa' => $ucesnik->adresa,
                        'grad' => $ucesnik->grad,
                        'drzava' => $ucesnik->drzava,
                        'visina' => $ucesnik->visina,
                        'tezina' => $ucesnik->tezina,
                        'majica' => \App\Models\Velicina::where('naziv', $ucesnik->majica)->first()->id,
                        'sorc' => \App\Models\Velicina::where('naziv', $ucesnik->sorc)->first()->id,
                        'duks' => \App\Models\Velicina::where('naziv', $ucesnik->duks)->first()->id,
                        // 'trenerka' => \App\Models\Velicina::where('naziv',$ucesnik->sorc)->first()->id,
                        // 'prijava' => $ucesnik->prijava,
                        'klub' => $ucesnik->klub,
                        'iskustvo' => $ucesnik->koliko_dugo_trenira,
                        'pozicija' => $ucesnik->pozicija,
                        // 'koliko_dugo_trenira' => $ucesnik->koliko_dugo_trenira,
                        'smena' => $ucesnik->smena,
                        'zdravstveni_problem' => $ucesnik->zdravstveni_problem,
                        'tip_prevoza_id' => \Str::contains($ucesnik->prevoz, 'Samostalno') ? 1 : 2,
                        'organizovani_prevoz' => !\Str::contains($ucesnik->prevoz, 'Samostalno') ? $kamp->organizovani_prevoz->first()->id : null,
                        // 'pet_treninga' => $ucesnik->pet_treninga,
                        'napomena_hrana' => $ucesnik->napomene_ishrana,
                        'napomena_smestaj' => $ucesnik->napomena_smestaj,
                        // 'interna_napomena' => $ucesnik->interna_napomena,
                        'kamp_id' => $kamp->id,
                        'smena_id' => $smena_id,
                        'saglasnost_politika_privatnosti' => true,
                        'saglasnost_obrada_podataka' => true,
                        'saglasnost_ucesce_na_kampu' => true,
                        'saglasnost_donatorski_ugovor' => true,
                        'saglasnost_pravila_kampa' => true,

                        'napomena_zdravstveni_problemi' => $ucesnik->zdravstveni_problem,
                        'napomena_alergije' => $ucesnik->alergije,
                        'dodatni_paketi' => $dodatni_paketi
                    ];
                })->each(function ($ucesnik, $key) {

                    $email = $ucesnik['email'];
                    $jmbg_pasos = $ucesnik['jmbg_pasos'];


                    $prijava = \App\Models\Prijava::when(!empty($email), function ($query) use ($email) {
                        return $query->where('email', $email);
                    })->when(!empty($jmbg_pasos), function ($query) use ($jmbg_pasos) {
                        return $query->where('jmbg_pasos', $jmbg_pasos);
                    })->first();
                    if (empty($prijava)) {
                        $prijava = \App\Models\Prijava::create($ucesnik);
                    }
                    // $prijava->smene()->sync([$ucesnik['smena_id'] => ['status_id' => 1]]);
                    // $prijava->smene()->save(new PrijavaSmena(['smena_id' => $ucesnik['smena_id'], 'status_id' => 1,'prijava_id'=>$prijava->id]));
                    \App\Models\PrijavaSmena::create(['smena_id' => $ucesnik['smena_id'], 'status_id' => 1, 'prijava_id' => $prijava->id]);
                    $prijava->dodatni_paketi()->sync($ucesnik['dodatni_paketi']);
                    $prijava->updateCena();
                });

            \DB::commit();
            // ->dd();
        }
    }
    public function import_treneri(){
        \DB::table('treners')->delete();

        \DB::table('valjevo2022treneri')->get()->each(function($t){
            \App\Models\Trener::create([
                'ime' => $t->ime,
                'prezime' => $t->prezime,
                'majica' => \App\Models\Velicina::where('naziv',$t->majica)->first()->id,
                'sorc' => \App\Models\Velicina::where('naziv',$t->sorc)->first()->id,
                'duks' => \App\Models\Velicina::where('naziv',$t->duks)->first()->id,
                'pol_id' => ($t->pol="Muški")?1:2,
                'komada' => $t->komada,
                'oprema_napomena' => $t->napomena
            ]);
        });
    }
}
