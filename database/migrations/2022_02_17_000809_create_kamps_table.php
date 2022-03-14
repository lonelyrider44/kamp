<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKampsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kamps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lokacija_id')->constrained('mestos');
            $table->string('naziv');
            $table->string('godina');
            $table->unsignedInteger('broj_prijava');
            $table->enum('status', ['Aktivan', 'Završen']);
            $table->decimal('cena', 11, 2);
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
        Schema::dropIfExists('kamps');
    }
}
