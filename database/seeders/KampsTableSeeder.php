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
                'lokacija_id' => 1,
                'smestaj' => '',
                'naziv' => 'Valjevo 2022',
                'datum_od' => NULL,
                'datum_do' => NULL,
                'broj_prijava' => 500,
                'status_id' => 1,
                'cena_smene' => NULL,
                'cena_smene_rsd' => '50000.00',
                'cena_smene_eur' => '500.00',
                'created_at' => '2022-05-20 23:06:07',
                'updated_at' => '2022-05-20 23:06:07',
            ),
        ));
        
        
    }
}