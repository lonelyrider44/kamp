<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaPregledsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_pregleds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prijava_id')->constrained('prijavas');
            $table->foreignId('lekar_id')->constrained('lekars');
            $table->date('datum_pregleda');
            $table->text('napomena')->nullable();
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
        Schema::dropIfExists('prijava_pregleds');
    }
}
