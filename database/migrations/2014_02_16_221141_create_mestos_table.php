<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mestos', function (Blueprint $table) {
            $table->id();
            $table->string('naziv', 30);
            $table->string('ptt', 5)->nullable();
            $table->foreignId('id_opstine')->constrained('opstinas');
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
        Schema::dropIfExists('mestos');
    }
}
