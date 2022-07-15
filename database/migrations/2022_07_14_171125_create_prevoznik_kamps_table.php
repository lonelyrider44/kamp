<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrevoznikKampsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prevoznik_kamps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->foreignId('prevoznik_id')->constrained('prevozniks'); 
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
        Schema::dropIfExists('prevoznik_kamps');
    }
}
