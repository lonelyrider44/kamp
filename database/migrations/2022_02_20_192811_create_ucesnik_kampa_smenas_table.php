<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUcesnikKampaSmenasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ucesnik_kampa_smenas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ucesnik_kampa_id')->constrained('ucesnik_kampas');
            $table->enum('smena',['I smena','II smena', 'III smena']);
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
        Schema::dropIfExists('ucesnik_kampa_smenas');
    }
}
