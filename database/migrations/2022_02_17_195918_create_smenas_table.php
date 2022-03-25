<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmenasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smenas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->date('datum_od');
            $table->date('datum_do');
            $table->foreignId('kamp_id')->constrained('kamps');
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
        Schema::dropIfExists('smenas');
    }
}
