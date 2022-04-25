<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SeedRoditelj extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \App\Models\Roditelj::create([
            // 'name' => 'Dejan Radovanović',
            'email' => 'lonelyrider45@gmail.com ',
            'password' => 'bscadmin#123',
            'prezime' => 'Radovanović',
            'ime' => 'Dejan',
            'telefon' => '064480349'
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
