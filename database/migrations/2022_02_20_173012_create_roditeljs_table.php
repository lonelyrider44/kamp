<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoditeljsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roditeljs', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique()->nullable();
            $table->string('telefon')->unique()->nullable();
            $table->string('ime');
            $table->string('prezime');
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
        Schema::dropIfExists('roditeljs');
    }
}
