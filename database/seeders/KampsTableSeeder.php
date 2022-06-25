<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class KampsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('kamps')->delete();
        
        \DB::table('kamps')->insert(array (
            0 => 
            array (
                'id' => 1,
                'lokacija_id' => 875,
                'smestaj' => 'Omni park',
                'naziv' => 'Letnji kamp Valjevo 2022',
                'datum_od' => NULL,
                'datum_do' => NULL,
                'broj_prijava' => 125,
                'status_id' => 1,
                'cena_smene_rsd' => '35400.00',
                'cena_smene_eur' => '300.00',
                'depozit_rsd' => '5900.00',
                'depozit_eur' => '50.00',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
        ));
        
        
    }
}