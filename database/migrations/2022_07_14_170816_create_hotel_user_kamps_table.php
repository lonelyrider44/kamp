<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelUserKampsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_user_kamps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->foreignId('hotel_user_id')->constrained('hotel_users'); 
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
        Schema::dropIfExists('hotel_user_kamps');
    }
}
