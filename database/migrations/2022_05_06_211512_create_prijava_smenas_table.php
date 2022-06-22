<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaSmenasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_smenas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prijava_id')->constrained('prijavas');
            $table->foreignId('smena_id')->constrained('smenas');

            //da li ostaviti ovde...
            $table->foreignId('status_id')->default(1)->constrained('prijava_statuses');
            $table->decimal('depozit_rsd',11,2)->default(0);
            $table->decimal('depozit_eur',11,2)->default(0);
            $table->timestamps();

            //STARA VERZIJA, ostavljeno kao primer, ako se bude sve definisano po smeni, a ne po prijavi (prevoz, dodatni paketi..)
        // Schema::create('ucesnik_kampa_smenas', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('ucesnik_kampa_id')->constrained('ucesnik_kampas');
        //     $table->foreignId('smena_id')->constrained('smenas');
        //     $table->string('prevoz')->nullable();
        //     $table->date('polazak')->nullable();
        //     $table->date('povratak')->nullable();
        //     $table->timestamps();
        // });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prijava_smenas');
    }
}
