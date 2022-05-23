<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SmenaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $prva_smena = \App\Models\Smena::create([
            'naziv' => 'Smena I',
            'datum_od' => '2022-01-01',
            'datum_do' => '2022-01-07',
            'kamp_id' => 1
        ]);
        $druga_smena = \App\Models\Smena::create([
            'naziv' => 'Smena II',
            'datum_od' => '2022-01-08',
            'datum_do' => '2022-01-14',
            'kamp_id' => 1
        ]);
    }
}
