<?php

namespace App\Http\Controllers;

use App\Models\DodatniPaket;
use App\Http\Requests\StoreDodatniPaketRequest;
use App\Http\Requests\UpdateDodatniPaketRequest;

class DodatniPaketController extends Controller
{
    public function datatable()
    {
        return datatables()->of(\App\Models\DodatniPaket::select(
            'dodatni_pakets.*',
            'kamps.naziv as kamp'
            // \DB::raw('COUNT(DISTINCT ucesnik_kampas.id) as broj_ucesnika'),
            // \DB::raw('COUNT(DISTINCT smenas.id) as broj_smena'),
            // \DB::raw('COUNT(DISTINCT dodatni_pakets.id) as broj_paketa'),
            // \DB::raw('COALESCE(SUM(uplatas.iznos)+ucesnik_kampas.depozit) as uplaceno')
        )
            ->leftJoin('kamps', 'kamps.id', 'dodatni_pakets.kamp_id')
            // ->leftJoin('prijavas', 'prijavas.kamp_id', 'kamps.id')
            // ->leftJoin('prijava_dodatni_pakets', 'dodatni_pakets.id', 'prijava_dodatni_pakets.dodatni_paket_id')
            // ->groupBy('dodatni_pakets.id')
            ->toBase())
            // ->addColumn('broj_smena', '0')
            // ->addColumn('cena', 'kamp.partials.dt_cena')
            ->addColumn('action', 'dodatni_paket.partials.dt_actions')
            ->addColumn('cena', 'dodatni_paket.partials.dt_cena')
            // ->addColumn('period', 'kamp.partials.dt_period')
            ->rawColumns(['period', 'action', 'cena'])
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
     * @param  \App\Http\Requests\StoreDodatniPaketRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDodatniPaketRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function show(DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function edit(DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDodatniPaketRequest  $request
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDodatniPaketRequest $request, DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function destroy(DodatniPaket $dodatniPaket)
    {
        //
    }
}
