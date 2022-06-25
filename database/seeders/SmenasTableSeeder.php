<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SmenasTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('smenas')->delete();
        
        \DB::table('smenas')->insert(array (
            0 => 
            array (
                'id' => 1,
                'kamp_id' => 1,
                'naziv' => 'I smena',
                'datum_od' => '2022-06-25',
                'datum_do' => '2022-07-02',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            1 => 
            array (
                'id' => 2,
                'kamp_id' => 1,
                'naziv' => 'II smena',
                'datum_od' => '2022-07-02',
                'datum_do' => '2022-07-09',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            2 => 
            array (
                'id' => 3,
                'kamp_id' => 1,
                'naziv' => 'III smena',
                'datum_od' => '2022-07-09',
                'datum_do' => '2022-07-16',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            3 => 
            array (
                'id' => 4,
                'kamp_id' => 1,
                'naziv' => 'IV smena',
                'datum_od' => '2022-07-16',
                'datum_do' => '2022-07-23',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            4 => 
            array (
                'id' => 5,
                'kamp_id' => 1,
                'naziv' => 'V smena',
                'datum_od' => '2022-07-23',
                'datum_do' => '2022-07-30',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
            5 => 
            array (
                'id' => 6,
                'kamp_id' => 1,
                'naziv' => 'VI smena',
                'datum_od' => '2022-07-30',
                'datum_do' => '2022-08-06',
                'created_at' => '2022-06-25 13:37:39',
                'updated_at' => '2022-06-25 13:37:39',
            ),
        ));
        
        
    }
}