<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaPregledParametarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_pregled_parametars', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prijava_pregled_id')->constrained('prijava_pregleds');
            $table->string('naziv');
            $table->string('vrednost');
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
        Schema::dropIfExists('prijava_pregled_parametars');
    }
}
