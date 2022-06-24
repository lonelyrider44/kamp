<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SeedUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \App\Models\User::create([
            'name' => 'Dejan Radovanović',
            'email' => 'lonelyrider44@gmail.com ',
            'password' => 'bscadmin#123',
            'prezime' => 'Radovanović',
            'ime' => 'Dejan',
            'telefon' => '064480349'
        ]);
        \App\Models\User::create([
            'name' => 'Administrator',
            'email' => 'vg_admin@gmail.com ',
            'password' => 'vgkamp#123',
            'prezime' => 'Admin',
            'ime' => 'Admin',
            'telefon' => ''
        ]);

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
