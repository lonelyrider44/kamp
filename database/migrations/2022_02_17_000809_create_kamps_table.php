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
            $table->foreignId('lokacija_id')->nullable()->constrained('mestos');
            $table->string('naziv');
            // $table->string('godina');
            $table->date('datum_od')->nullable();
            $table->date('datum_do')->nullable();
            $table->unsignedInteger('broj_prijava');
            $table->enum('status', ['U pripremi', 'Aktivan', 'Završen'])->default('U pripremi');
            $table->decimal('cena_smene', 11, 2)->nullable();
            $table->decimal('cena_smene_rsd', 11, 2);
            $table->decimal('cena_smene_eur', 11, 2);
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
