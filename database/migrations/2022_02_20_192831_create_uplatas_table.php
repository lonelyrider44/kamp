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
            $table->foreignId('kamp_id')->constrained('kamps');
            $table->foreignId('smena_id')->nullable()->constrained('smenas');
            $table->foreignId('ucesnik_id')->nullable()->constrained('ucesniks');
            $table->foreignId('prijava_id')->nullable()->constrained('prijavas');
            $table->date('datum_uplate');
            $table->decimal('iznos_rsd',11,2)->nullable();
            $table->decimal('iznos_eur',11,2)->nullable();
            $table->boolean('depozit')->default(false);
            $table->text('napomena')->nullable();
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
