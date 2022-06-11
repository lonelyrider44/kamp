<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatusZahtevasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_zahtevas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->timestamps();
        });

        \App\Models\StatusZahteva::create(['naziv' => 'U obradi']);
        \App\Models\StatusZahteva::create(['naziv' => 'Rešen']);
        // \App\Models\StatusZahteva::create(['naziv' => 'Odobren']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status_zahtevas');
    }
}
