<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUcesnikKampasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ucesnik_kampas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ucesnik_id')->nullable()->constrained('ucesniks');
            $table->foreignId('kamp_id')->constrained('kamps');
            // $table->foreignId('trener_id')->constrained('treners');
            $table->foreignId('user_id')->nullable()->constrained('users');

            // $table->string('ime');
            // $table->string('prezime');
            // $table->string('email');
            // $table->string('telefon');
            // $table->enum('Pol',['Muški','Ženski']);
            // $table->date('datum_rodjenja');
            // $table->string('jmbg')->nullable();
            // $table->string('pasos')->nullable();
            // $table->string('adresa');
            // $table->string('mesto');
            // $table->string('država');

            // $table->string('ime_roditelja');
            // $table->string('prezime_roditelja');
            // $table->string('email_roditelja')->nullable();
            // $table->string('telefon_roditelja')->nullable();

            $table->unsignedInteger('visina');
            $table->decimal('tezina', 6, 2);
            $table->boolean('alergije')->default(false);
            $table->boolean('alergija_polen')->default(false);
            $table->text('zdravstveni_problem')->nullable();
            $table->text('napomena_hrana')->nullable();


            
            $table->boolean('trenira_odbojku')->default(false);
            
            $table->enum('majica',['8','10','12','14','16','S','M','L','XL','2XL','3XL']);
            $table->enum('sorc',['8','10','12','14','16','S','M','L','XL','2XL','3XL']);
            $table->enum('duks',['8','10','12','14','16','S','M','L','XL','2XL','3XL']);
            $table->enum('trenerka',['8','10','12','14','16','S','M','L','XL','2XL','3XL']);
            
            $table->foreignId('hotel_id')->nullable()->constrained('hotels');
            $table->string('broj_sobe')->nullable();
            // $table->enum('prevoz',['samostalni','organizovani']);
            $table->string('prevoz')->nullable();
            $table->text('napomena_smestaj')->nullable();
            
            $table->enum('rezim', ['Individualni','Rehab','Video'])->nullable();
            $table->enum('status',['Prisutan','Otkazano','Nije se pojavio']);
            $table->boolean('gratis')->default(false);
            $table->decimal('depozit',11,2)->default(0);

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
        Schema::dropIfExists('ucesnik_kampas');
    }
}
