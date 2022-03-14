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
            $table->foreignId('ucesnik_id')->constrained('ucesniks');
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->foreignId('trener_id')->constrained('treners');
            $table->enum('rezim', ['Individualni','Rehab','Video'])->nullable();
            $table->enum('status',['Prisutan','Otkazano','Nije se pojavio']);
            $table->boolean('gratis')->default(false);
            $table->text('napomena_smestaj')->nullable();
            $table->text('napomena_hrana')->nullable();
            $table->foreignId('hotel_id')->nullable()->constrained('hotels');
            $table->string('broj_sobe')->nullable();
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
