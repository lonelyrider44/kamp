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
            $table->string('prezime')->nullable();
            $table->string('ime')->nullable();
            $table->string('email')->unique();
            $table->string('telefon')->nullable();
            $table->string('password');

            $table->foreignId('majica')->nullable()->constrained('velicinas');
            $table->foreignId('sorc')->nullable()->constrained('velicinas');
            $table->foreignId('duks')->nullable()->constrained('velicinas');
            $table->foreignId('trenerka')->nullable()->constrained('velicinas');

            $table->foreignId('pol_id')->constrained('pols');
            $table->string('komada')->nullable();
            $table->text('oprema_napomena')->nullable();

            $table->boolean('koordinator')->default(false);
            $table->timestamps();
        });

        \App\Models\Trener::create([
            'ime' => 'Vanja',
            'prezime' => 'Grbić',
            'email' => 'vanjagrbic@gmail.com',
            'majica' => 11,
            'sorc' => 11, 
            'duks' => 11,
            'trenerka' => 11,
            'pol_id' => 1,
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
