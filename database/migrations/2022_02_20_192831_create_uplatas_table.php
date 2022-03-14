<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUplatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uplatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ucesnik_kampa_id')->constrained('ucesnik_kampas');
            $table->date('datum');
            $table->decimal('iznos',11,2);
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
        Schema::dropIfExists('uplatas');
    }
}
