<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVelicinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('velicinas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->timestamps();
        });

        \App\Models\Velicina::create(['naziv' => '8']);
        \App\Models\Velicina::create(['naziv' => '10']);
        \App\Models\Velicina::create(['naziv' => '12']);
        \App\Models\Velicina::create(['naziv' => '14']);
        \App\Models\Velicina::create(['naziv' => '16']);
        \App\Models\Velicina::create(['naziv' => 'S']);
        \App\Models\Velicina::create(['naziv' => 'M']);
        \App\Models\Velicina::create(['naziv' => 'L']);
        \App\Models\Velicina::create(['naziv' => 'XL']);
        \App\Models\Velicina::create(['naziv' => '2XL']);
        \App\Models\Velicina::create(['naziv' => '3XL']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('velicinas');
    }
}
