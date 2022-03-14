<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpremasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opremas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ucesnik_kampas_id')->nullable()->constrained('ucesnik_kampas');
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->enum('majica', ['6','8','10','12','14','16', 'S', 'M','L', 'XL', '2XL', '3XL', '4XL'])->nullable();
            $table->enum('sorc', ['6','8','10','12','14','16', 'S', 'M','L', 'XL', '2XL', '3XL', '4XL'])->nullable();
            $table->enum('duks', ['6','8','10','12','14','16', 'S', 'M','L', 'XL', '2XL', '3XL', '4XL'])->nullable();
            $table->enum('trenerka', ['6','8','10','12','14','16', 'S', 'M','L', 'XL', '2XL', '3XL', '4XL'])->nullable();
            $table->jsonb('smene')->nullable();
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
        Schema::dropIfExists('opremas');
    }
}
