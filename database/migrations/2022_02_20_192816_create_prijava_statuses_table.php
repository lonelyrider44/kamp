<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->timestamps();
        });

        // \App\Models\PrijavaStatus::create(['naziv' => 'Prijavljen']);
        \App\Models\PrijavaStatus::create(['naziv' => 'Učesnik']);
        \App\Models\PrijavaStatus::create(['naziv' => 'Otkazano']);
        \App\Models\PrijavaStatus::create(['naziv' => 'Nije se pojavio']);
        \App\Models\PrijavaStatus::create(['naziv' => 'Zabrana prijave']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prijava_statuses');
    }
}
