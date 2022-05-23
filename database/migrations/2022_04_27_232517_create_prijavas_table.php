<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijavas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->foreignId('ucesnik_id')->nullable()->constrained('ucesniks');
            $table->foreignId('status_id')->default(1)->constrained('prijava_statuses');

            $table->string('ime_roditelja');
            $table->string('prezime_roditelja');
            $table->string('email_roditelja')->nullable();
            $table->string('telefon_roditelja')->nullable();

            $table->string('ime');
            $table->string('prezime');
            $table->string('email')->nullable();
            $table->string('telefon')->nullable();

            $table->foreignId('pol_id')->contrained('pols');
            $table->date('datum_rodjenja');
            $table->string('jmbg_pasos');
            // $table->string('pasos')->nullable();

            $table->string('adresa');
            $table->string('mesto');
            $table->string('drzava');

            $table->unsignedInteger('visina');
            $table->unsignedInteger('tezina');

            $table->boolean('alergije')->default(false);
            $table->text('zdravstveni_problem')->nullable();

            $table->foreignId('majica')->constrained('velicinas');
            $table->foreignId('sorc')->constrained('velicinas');
            $table->foreignId('duks')->constrained('velicinas');
            $table->foreignId('trenerka')->constrained('velicinas');

            $table->text('napomena_alergije')->nullable();
            $table->text('napomena_zdravstveni_problemi')->nullable();
            $table->text('napomena_smestaj')->nullable();
            $table->text('napomena_hrana')->nullable();

            // $table->enum('prevoz',['samostalni','organizovani']);
            $table->foreignId('tip_prevoza_id')->constrained('tip_prevozas');
            $table->foreignId('organizovani_prevoz')->nullable()->constrained('organizovani_prevozs');

            $table->boolean('saglasnost_politika_privatnosti')->default(false);
            $table->boolean('saglasnost_obrada_podataka')->default(false);
            $table->boolean('saglasnost_ucesce_na_kampu')->default(false);
            $table->boolean('saglasnost_donatorski_ugovor')->default(false);
            $table->boolean('saglasnost_pravila_kampa')->default(false);

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
        Schema::dropIfExists('prijavas');
    }
}
