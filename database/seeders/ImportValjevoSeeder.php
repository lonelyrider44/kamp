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

        $this->call(KampsTableSeeder::class);
        $this->call(SmenasTableSeeder::class);
        $this->call(DodatniPaketsTableSeeder::class);
        $this->call(OrganizovaniPrevozsTableSeeder::class);
        
        $this->call(RoditeljsTableSeeder::class);
        $this->call(UcesniksTableSeeder::class);
        $this->call(PrijavasTableSeeder::class);
        $this->call(PrijavaSmenasTableSeeder::class);
        $this->call(PrijavaPaketisTableSeeder::class);
    }
}
