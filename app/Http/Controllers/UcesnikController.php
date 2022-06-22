<?php

namespace App\Http\Controllers;

use App\Models\Ucesnik;
use App\Http\Requests\StoreUcesnikRequest;
use App\Http\Requests\UpdateUcesnikRequest;

class UcesnikController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
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
            'prijavas.depozit_rsd',
            'prijavas.depozit_eur',
            'prijavas.ukupno_rsd',
            'prijavas.ukupno_eur',
            'prijavas.gratis',
            'prijavas.opstina',
            \DB::raw('COUNT(DISTINCT prijavas.kamp_id) as broj_kampova'),
            \DB::raw('COUNT(prijava_smenas.smena_id) as broj_smena'),
            \DB::raw('SUM(uplatas.iznos_rsd) as uplate_rsd'),
            \DB::raw('SUM(uplatas.iznos_eur) as uplate_eur'),
        )
            ->join('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
            ->join('prijava_smenas','prijava_smenas.prijava_id','prijavas.id')
            ->leftJoin('uplatas','uplatas.ucesnik_id', 'ucesniks.id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id',$request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                return $query->whereIn('prijavas.id', function($query)use($request){
                    $query->select('prijava_smenas.prijava_id')
                        ->from('prijava_smenas')
                        ->where('prijava_smenas.smena_id', $request->smena_id);
                });
                // return $query->where('smenas.id', $request->smena_id);
            })
            ->groupBy('ucesniks.id')
            ->toBase()->get())
            ->addColumn('action', 'ucesnik.partials.dt_actions')
            ->addColumn('ucesnik', 'ucesnik.partials.dt_ucesnik')
            ->addColumn('puna_adresa', 'ucesnik.partials.dt_puna_adresa')
            ->addColumn('roditelj', 'ucesnik.partials.dt_roditelj')
            ->addColumn('uplate', 'ucesnik.partials.dt_uplate')
            ->addColumn('ukupno', 'ucesnik.partials.dt_ukupno')
            ->addColumn('depozit', 'ucesnik.partials.dt_depozit')
            ->rawColumns(['action', 'ucesnik', 'puna_adresa', 'roditelj','uplate','ukupno','depozit'])
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
