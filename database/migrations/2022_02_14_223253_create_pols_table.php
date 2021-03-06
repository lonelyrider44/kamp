<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pols', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->timestamps();
        });
        \App\Models\Pol::create(['naziv' => 'Muški']);
        \App\Models\Pol::create(['naziv' => 'Ženski']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pols');
    }
}
