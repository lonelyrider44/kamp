<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizovaniPrevozsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizovani_prevozs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->string('naziv');
            $table->decimal('cena_rsd',11,2);
            $table->decimal('cena_eur',11,2);
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
        Schema::dropIfExists('organizovani_prevozs');
    }
}
