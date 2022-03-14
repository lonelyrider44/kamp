<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SeedRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Korisnici mogu biti superadmini, koordinatori, lekari, fizioterapeuti, treneri, hotel, prevoznik, oprema
        \Spatie\Permission\Models\Role::create(['name' => 'Superadmin']);
        \Spatie\Permission\Models\Role::create(['name' => 'Koordinator']);
        \Spatie\Permission\Models\Role::create(['name' => 'Trener']);
        \Spatie\Permission\Models\Role::create(['name' => 'Lekar']);
        \Spatie\Permission\Models\Role::create(['name' => 'Fizioterapeut']);
        \Spatie\Permission\Models\Role::create(['name' => 'Prevoznik']);
        \Spatie\Permission\Models\Role::create(['name' => 'Hotel']);
        \Spatie\Permission\Models\Role::create(['name' => 'Oprema']);
        \Spatie\Permission\Models\Role::create(['name' => 'Roditelj']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
