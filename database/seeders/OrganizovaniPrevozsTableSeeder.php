<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OrganizovaniPrevozsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('organizovani_prevozs')->delete();
        
        \DB::table('organizovani_prevozs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'kamp_id' => 1,
                'naziv' => 'Oba pravca',
                'cena_rsd' => '1300.00',
                'cena_eur' => '10.00',
                'created_at' => '2022-05-20 23:06:07',
                'updated_at' => '2022-05-20 23:06:07',
            ),
            1 => 
            array (
                'id' => 2,
                'kamp_id' => 1,
                'naziv' => 'Beograd-Valjevo',
                'cena_rsd' => '800.00',
                'cena_eur' => '7.00',
                'created_at' => '2022-05-20 23:06:07',
                'updated_at' => '2022-05-20 23:06:07',
            ),
            2 => 
            array (
                'id' => 3,
                'kamp_id' => 1,
                'naziv' => 'Valjevo-Beograd',
                'cena_rsd' => '800.00',
                'cena_eur' => '7.00',
                'created_at' => '2022-05-20 23:06:07',
                'updated_at' => '2022-05-20 23:06:07',
            ),
        ));
        
        
    }
}