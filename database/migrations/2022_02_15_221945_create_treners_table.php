<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrenersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('treners', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('prezime');
            $table->string('ime');
            $table->string('email')->unique();
            $table->string('telefon')->nullable();
            $table->string('password');

            $table->foreignId('majica')->constrained('velicinas');
            $table->foreignId('sorc')->constrained('velicinas');
            $table->foreignId('duks')->constrained('velicinas');
            $table->foreignId('trenerka')->constrained('velicinas');

            $table->boolean('koordinator')->default(false);
            $table->timestamps();
        });

        \App\Models\Trener::create([
            'name' => 'Vanja',
            'prezime' => 'Grbić',
            'email' => 'vanjagrbic@gmail.com',
            'majica' => 11,
            'sorc' => 11, 
            'duks' => 11,
            'trenerka' => 11,
            'password' => 'valjevo2022'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('treners');
    }
}
