<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        $this->call(KampsTableSeeder::class);
        $this->call(SmenaSeeder::class);
        $this->call(OrganizovaniPrevozsTableSeeder::class);
        $this->call(PrijavasTableSeeder::class);
        $this->call(PrijavaSmenesTableSeeder::class);
        $this->call(PrijavaSmenasTableSeeder::class);
        $this->call(PrijavaPaketisTableSeeder::class);
        // \App\Models\User::factory(10)->create();
        // $this->call(UcesniciTableSeeder::class);

        Schema::enableForeignKeyConstraints();
        $this->call(DodatniPaketsTableSeeder::class);
    }
}
