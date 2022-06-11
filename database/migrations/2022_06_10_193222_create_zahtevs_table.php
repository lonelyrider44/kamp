<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateZahtevsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zahtevs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('roditelj_id')->constrained('roditeljs')->onDelete('cascade');
            $table->foreignId('ucesnik_id')->nullable()->constrained('ucesniks');
            $table->foreignId('kamp_id')->nullable()->constrained('kamps');
            $table->foreignId('smena_id')->nullable()->constrained('smenas');
            $table->text('zahtev');
            $table->foreignId('status_id')->constrained('status_zahtevas');
            $table->text('odgovor')->nullable();
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
        Schema::dropIfExists('zahtevs');
    }
}
