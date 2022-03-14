<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUcesniksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ucesniks', function (Blueprint $table) {
            $table->id();
            $table->string('prezime');
            $table->string('ime');
            $table->date('datum_rodjenja');
            $table->string('jmbg')->unique()->nullable();
            $table->string('pasos')->unique()->nullable();
            $table->string('email')->nullable();
            $table->string('telefon')->nullable();
            $table->foreignId('mesto_id')->constrained('mestos');

            $table->string('prezime_roditelja');
            $table->string('ime_roditelja');
            $table->string('telefon_roditelja');
            
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
        Schema::dropIfExists('ucesniks');
    }
}
