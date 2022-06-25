<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DodatniPaketsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('dodatni_pakets')->delete();
        
        \DB::table('dodatni_pakets')->insert(array (
            0 => 
            array (
                'id' => 1,
                'kamp_id' => 1,
                'naziv' => 'ORTOPEDIJA - Izrada individualnih vežbi',
                'opis' => 'Izrada individualnih vežbi na osnovu analize ortopedskog testiranja za polaznike/polaznice kampa zarad sopstvene posture-pravilnog držanja tela i eliminacije disbalansa',
                'iznos_rsd' => '2360.00',
                'iznos_eur' => '20.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            1 => 
            array (
                'id' => 2,
                'kamp_id' => 1,
                'naziv' => 'ORTOPEDIJA - Individualno vežbanje sa fizioterapeutom',
            'opis' => 'Individualno vežbanje sa fizioterapeutom po izrađenom programu vežbi gde dete nauči da radi vežbe koje će nastaviti da radi kod kuće (5 treninga nedeljno)',
                'iznos_rsd' => '5900.00',
                'iznos_eur' => '50.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            2 => 
            array (
                'id' => 3,
                'kamp_id' => 1,
                'naziv' => 'REHABILITACIJA POVREDA - Individualna rehabilitacija sa fizioterapeutom',
            'opis' => 'Individualna rehabilitacija sa fizioterapeutom - povrede i deformiteti (kifoza, skolioza, lordoza, ravna stopala,...). 5 treninga nedeljno',
                'iznos_rsd' => '5900.00',
                'iznos_eur' => '50.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            3 => 
            array (
                'id' => 4,
                'kamp_id' => 1,
                'naziv' => 'REHABILITACIJA POVREDA - Edukacija i osposobljavanje za jačanje tela',
            'opis' => 'Edukacija i osposobljavanje za jačanje tela, individualni rad sa fizioterapeutom Ambulante za rehabilitaciju GB Medic ,Goranom Blagojevićem, učenje pravilne tehnike u teretani (kondicioniranje). 5 treninga nedeljno.',
                'iznos_rsd' => '5900.00',
                'iznos_eur' => '50.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            4 => 
            array (
                'id' => 5,
                'kamp_id' => 1,
                'naziv' => 'INDIVIDUALNI SNIMAK SA KAMPA',
                'opis' => 'Izrada individualnog video zapisa sa kampa sa snimateljem/rediteljem Nemanjom Obradovićem iz Studio 4x4',
                'iznos_rsd' => '5900.00',
                'iznos_eur' => '50.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            5 => 
            array (
                'id' => 6,
                'kamp_id' => 1,
                'naziv' => 'DODATNI TRENINZI',
            'opis' => 'Dodatni (individualni treninzi) na korekciji tehnike i poboljšanju elemenata igre za decu 12god i više (2010 i stariji). Rad u grupama do 5 ili individualno u zavisnosti od potrebe i željenog elementa pod nadzorom (učešćem Vladimira Grbića) 5 treninga nedeljno',
                'iznos_rsd' => '11800.00',
                'iznos_eur' => '100.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
        ));
        
        
    }
}