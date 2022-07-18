<?php

use App\Models\PrijavaSaglasnost;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrijavaSaglasnostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prijava_saglasnosts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prijava_id')->constrained('prijavas');
            $table->boolean('saglasnost_politika_privatnosti')->default(false);
            $table->boolean('saglasnost_obrada_podataka')->default(false);
            $table->boolean('saglasnost_ucesce_na_kampu')->default(false);
            $table->boolean('saglasnost_donatorski_ugovor')->default(false);
            $table->boolean('saglasnost_pravila_kampa')->default(false);
            $table->timestamps();
        });

        \App\Models\Prijava::withoutGlobalScopes()->get()->each(function ($prijava) {
            $prijava->saglasnost()->save(new PrijavaSaglasnost([
                'saglasnost_politika_privatnosti' => $prijava->saglasnost_politika_privatnosti,
                'saglasnost_obrada_podataka' => $prijava->saglasnost_obrada_podataka,
                'saglasnost_ucesce_na_kampu' => $prijava->saglasnost_ucesce_na_kampu,
                'saglasnost_donatorski_ugovor' => $prijava->saglasnost_donatorski_ugovor,
                'saglasnost_pravila_kampa' => $prijava->saglasnost_pravila_kampa,
            ]));
        });

        Schema::table('prijavas', function (Blueprint $table) { 
            $table->dropColumn('saglasnost_politika_privatnosti');
            $table->dropColumn('saglasnost_obrada_podataka');
            $table->dropColumn('saglasnost_ucesce_na_kampu');
            $table->dropColumn('saglasnost_donatorski_ugovor');
            $table->dropColumn('saglasnost_pravila_kampa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('prijava_saglasnosts');
    }
}
