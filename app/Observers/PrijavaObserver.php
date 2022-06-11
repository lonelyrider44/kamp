<?php

namespace App\Observers;

use App\Models\Prijava;

class PrijavaObserver
{
    /**
     * Handle the Prijava "created" event.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return void
     */
    public function created(Prijava $prijava)
    {
        $roditelj = \App\Models\Roditelj::updateOrCreate([
            'email' => $prijava->email_roditelja,
        ], [
            'telefon' => $prijava->telefon_roditelja,
            'ime' => $prijava->ime_roditelja,
            'prezime' => $prijava->prezime_roditelja,
            'password' => $prijava->roditelj_sifra
        ]);
        if(!empty($prijava->email)){
            $ucesnik = \App\Models\Ucesnik::updateOrCreate(
                ['email' => $prijava->email],
                $prijava->toArray() + ['roditelj_id' => $roditelj->id]
            );
        }else{
            $ucesnik = \App\Models\Ucesnik::updateOrCreate(
                ['jmbg_pasos' => $prijava->jmbg_pasos],
                $prijava->toArray() + ['roditelj_id' => $roditelj->id]
            );
        }
        $prijava->update([
            'ucesnik_id' => $ucesnik->id, 'roditelj_id' => $roditelj->id
        ]);
    }

    /**
     * Handle the Prijava "updated" event.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return void
     */
    public function updated(Prijava $prijava)
    {
        //
    }

    /**
     * Handle the Prijava "deleted" event.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return void
     */
    public function deleted(Prijava $prijava)
    {
        //
    }

    /**
     * Handle the Prijava "restored" event.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return void
     */
    public function restored(Prijava $prijava)
    {
        //
    }

    /**
     * Handle the Prijava "force deleted" event.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return void
     */
    public function forceDeleted(Prijava $prijava)
    {
        //
    }
}
