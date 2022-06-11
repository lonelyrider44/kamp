<?php

namespace App\Http\Controllers;

use App\Models\Ucesnik;
use App\Http\Requests\StoreUcesnikRequest;
use App\Http\Requests\UpdateUcesnikRequest;

class UcesnikController extends Controller
{
    public function datatable()
    {
        return datatables()->of(\App\Models\Ucesnik::select(
            'ucesniks.id',
            'ucesniks.ime',
            'ucesniks.prezime',
            'ucesniks.email',
            'ucesniks.telefon',
            'ucesniks.adresa',
            'ucesniks.grad',
            'ucesniks.drzava',
            'ucesniks.ime_roditelja',
            'ucesniks.prezime_roditelja',
            'ucesniks.email_roditelja',
            'ucesniks.telefon_roditelja',
            \DB::raw('COUNT(prijavas.kamp_id) as broj_kampova')
        )
            ->leftJoin('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
            ->groupBy('ucesniks.id')
            ->toBase()->get())
            ->addColumn('action', 'ucesnik.partials.dt_actions')
            ->addColumn('ucesnik', 'ucesnik.partials.dt_ucesnik')
            ->addColumn('puna_adresa', 'ucesnik.partials.dt_puna_adresa')
            ->addColumn('roditelj', 'ucesnik.partials.dt_roditelj')
            ->rawColumns(['action', 'ucesnik', 'puna_adresa', 'roditelj'])
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
