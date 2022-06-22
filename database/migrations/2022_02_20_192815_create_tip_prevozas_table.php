<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipPrevozasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tip_prevozas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->timestamps();
        });

        \App\Models\TipPrevoza::create(['naziv' => 'Samostalni']);
        \App\Models\TipPrevoza::create(['naziv' => 'Organizovani']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tip_prevozas');
    }
}
