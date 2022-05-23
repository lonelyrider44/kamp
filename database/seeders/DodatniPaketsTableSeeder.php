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
                'naziv' => 'Dodatni paket 1',
                'opis' => 'Dodatni paket 1 opis',
                'iznos_rsd' => '2400.00',
                'iznos_eur' => '20.00',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'kamp_id' => 1,
                'naziv' => 'Dodatni paket 2',
                'opis' => 'Dodatni paket 2 opis',
                'iznos_rsd' => '3600.00',
                'iznos_eur' => '30.00',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}