<?php

namespace App\Observers;

use App\Models\Roditelj;

class RoditeljObserver
{
    public function saving(Roditelj $roditelj)
    {
        if(empty($roditelj->password)){
            $roditelj->password = \Illuminate\Support\Facades\Hash::make('bscadmin#123');
        }
    }
    /**
     * Handle the Roditelj "created" event.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return void
     */
    public function created(Roditelj $roditelj)
    {
        //
    }

    /**
     * Handle the Roditelj "updated" event.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return void
     */
    public function updated(Roditelj $roditelj)
    {
        //
    }

    /**
     * Handle the Roditelj "deleted" event.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return void
     */
    public function deleted(Roditelj $roditelj)
    {
        //
    }

    /**
     * Handle the Roditelj "restored" event.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return void
     */
    public function restored(Roditelj $roditelj)
    {
        //
    }

    /**
     * Handle the Roditelj "force deleted" event.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return void
     */
    public function forceDeleted(Roditelj $roditelj)
    {
        //
    }
}
