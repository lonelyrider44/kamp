<?php

namespace App\Observers;

use App\Models\Ucesnik;

class UcesnikObserver
{
    /**
     * Handle the Ucesnik "created" event.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return void
     */
    public function creating(Ucesnik $ucesnik)
    {
        if(empty($ucesnik->password)){
            $ucesnik->password = \Illuminate\Support\Facades\Hash::make('bscadmin#123');
        }
    }
    public function created(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Handle the Ucesnik "updated" event.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return void
     */
    public function updated(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Handle the Ucesnik "deleted" event.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return void
     */
    public function deleted(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Handle the Ucesnik "restored" event.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return void
     */
    public function restored(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Handle the Ucesnik "force deleted" event.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return void
     */
    public function forceDeleted(Ucesnik $ucesnik)
    {
        //
    }
}
