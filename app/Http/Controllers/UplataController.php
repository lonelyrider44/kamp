<?php

namespace App\Http\Controllers;

use App\Models\Uplata;
use App\Http\Requests\StoreUplataRequest;
use App\Http\Requests\UpdateUplataRequest;

class UplataController extends Controller
{
    public function datatable()
    {
        return datatables()->of(
            \App\Models\Uplata::select(
                'uplatas.*',
                'kamps.naziv as kamp',
                \DB::raw('CONCAT(ucesniks.prezime," ", ucesniks.ime) as ucesnik')
            )->join('kamps', 'kamps.id', 'uplatas.kamp_id')
                ->join('ucesnik_kampas', 'ucesnik_kampas.id', 'uplatas.ucesnik_kampa_id')
                ->join('ucesniks', 'ucesniks.id', 'ucesnik_kampas.ucesnik_id')->toBase()
        )
            ->addColumn('action', 'uplata.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreUplataRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUplataRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function show(Uplata $uplata)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function edit(Uplata $uplata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUplataRequest  $request
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUplataRequest $request, Uplata $uplata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function destroy(Uplata $uplata)
    {
        //
    }
}
