<?php

namespace App\Http\Controllers;

use App\Models\Kamp;
use App\Http\Requests\StoreKampRequest;
use App\Http\Requests\UpdateKampRequest;

class KampController extends Controller
{
    public function datatable()
    {
        return datatables()->of(\App\Models\Kamp::select(
            'kamps.id',
            'kamps.naziv',
            'kamps.datum_od',
            'kamps.datum_do',
            'kamps.cena',
            \DB::raw('COUNT(ucesnik_kampas.id) as broj_ucesnika'),
            \DB::raw('COUNT(smenas.id) as broj_smena'),
            \DB::raw('SUM(uplatas.iznos)+ucesnik_kampas.depozit as uplaceno')
        )->leftJoin('ucesnik_kampas', 'ucesnik_kampas.kamp_id', 'kamps.id')
        ->leftJoin('smenas','smenas.kamp_id','kamps.id')
        ->leftJoin('uplatas','uplatas.ucesnik_kampa_id','ucesnik_kampas.id')
            ->groupBy(
                'kamps.id',
                'kamps.naziv',
                'kamps.datum_od',
                'kamps.datum_do',
                'kamps.cena',
                'ucesnik_kampas.depozit'
            )
            ->toBase())
            // ->addColumn('broj_smena', '0')
            ->addColumn('action', 'kamp.partials.dt_actions')
            ->addColumn('period', 'kamp.partials.dt_period')
            ->rawColumns(['period', 'action'])
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
     * @param  \App\Http\Requests\StoreKampRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKampRequest $request)
    {
        // return response()->json($request->all(),500);
        \App\Models\Kamp::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function show(Kamp $kamp)
    {
        return $kamp;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function edit(Kamp $kamp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKampRequest  $request
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKampRequest $request, Kamp $kamp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kamp $kamp)
    {
        //
    }
}
