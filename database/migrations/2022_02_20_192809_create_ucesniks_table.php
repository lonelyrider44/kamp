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
            $table->string('jmbg_pasos')->unique()->nullable();
            $table->string('email')->nullable();
            $table->string('telefon')->nullable();
            $table->string('adresa')->nullable();
            $table->string('grad')->nullable();
            $table->string('drzava')->nullable();
            // $table->enum('pol',[1,2])->nullable();
            $table->foreignId('pol_id')->constrained('pols');

            $table->foreignId('mesto_id')->nullable()->constrained('mestos');

            $table->string('prezime_roditelja');
            $table->string('ime_roditelja');
            $table->string('telefon_roditelja');
            $table->string('email_roditelja');

            $table->foreignId('roditelj_id')->nullable()->constrained('roditeljs');
            
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
