<?php

namespace App\Http\Controllers;

use App\Models\Ucesnik;
use App\Http\Requests\StoreUcesnikRequest;
use App\Http\Requests\UpdateUcesnikRequest;

class UcesnikController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Ucesnik::all())
            ->addColumn('action','kamp.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreUcesnikRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUcesnikRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return \Illuminate\Http\Response
     */
    public function show(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return \Illuminate\Http\Response
     */
    public function edit(Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUcesnikRequest  $request
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUcesnikRequest $request, Ucesnik $ucesnik)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ucesnik  $ucesnik
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ucesnik $ucesnik)
    {
        //
    }
}
