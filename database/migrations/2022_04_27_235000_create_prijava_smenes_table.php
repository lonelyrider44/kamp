<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaSmenesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_smenes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prijava_id')->constrained('prijavas');
            $table->foreignId('smena_id')->constrained('smenas');
            $table->foreignId('status_id')->constrained('prijava_statuses')->default(1);
            $table->decimal('depozit_rsd',11,2)->default(0);
            $table->decimal('depozit_eur',11,2)->default(0);
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
        Schema::dropIfExists('prijava_smenes');
    }
}