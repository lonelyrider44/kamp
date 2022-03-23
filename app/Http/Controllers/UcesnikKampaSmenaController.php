<?php

namespace App\Http\Controllers;

use App\Models\UcesnikKampaSmena;
use App\Http\Requests\StoreUcesnikKampaSmenaRequest;
use App\Http\Requests\UpdateUcesnikKampaSmenaRequest;

class UcesnikKampaSmenaController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\UcesnikKampaSmena::all())
            ->addColumn('action','ucesnik_kampa_smena.partials.dt_actions')
        ->make(true);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUcesnikKampaSmenaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUcesnikKampaSmenaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UcesnikKampaSmena  $ucesnikKampaSmena
     * @return \Illuminate\Http\Response
     */
    public function show(UcesnikKampaSmena $ucesnikKampaSmena)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UcesnikKampaSmena  $ucesnikKampaSmena
     * @return \Illuminate\Http\Response
     */
    public function edit(UcesnikKampaSmena $ucesnikKampaSmena)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUcesnikKampaSmenaRequest  $request
     * @param  \App\Models\UcesnikKampaSmena  $ucesnikKampaSmena
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUcesnikKampaSmenaRequest $request, UcesnikKampaSmena $ucesnikKampaSmena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UcesnikKampaSmena  $ucesnikKampaSmena
     * @return \Illuminate\Http\Response
     */
    public function destroy(UcesnikKampaSmena $ucesnikKampaSmena)
    {
        //
    }
}
