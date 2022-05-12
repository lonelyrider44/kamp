<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDodatniPaketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dodatni_pakets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->string('naziv');
            $table->text('opis');
            $table->decimal('iznos_rsd', 11, 2);
            $table->decimal('iznos_eur', 11, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dodatni_pakets');
    }
}
