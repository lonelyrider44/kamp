<?php

namespace App\Http\Controllers;

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
                'smenas.naziv as smena',
                \DB::raw('CONCAT(ucesniks.prezime," ", ucesniks.ime) as ucesnik')
            )
                ->leftJoin('kamps', 'kamps.id', 'uplatas.kamp_id')
                ->leftJoin('smenas', 'smenas.id', 'uplatas.smena_id')
                ->leftJoin('ucesniks', 'ucesniks.id', 'uplatas.ucesnik_id')
                ->toBase()
        )
            ->addColumn('iznos', 'uplata.partials.dt_iznos')
            ->addColumn('action', 'uplata.partials.dt_actions')
            ->rawColumns(['iznos','action'])
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
        return $this->exec_safe(function()use($request){
            \App\Models\Uplata::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function show($uplata)
    {
        $uplata = \App\Models\Uplata::find($uplata);
        return response()->json($uplata->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function edit(\App\Models\Uplata $uplata)
    {
        return response()->json($uplata);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUplataRequest  $request
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUplataRequest $request, $uplata)
    {
        $uplata = \App\Models\Uplata::find($uplata);
        return $this->exec_safe(function()use($request,$uplata){
            $uplata->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Uplata  $uplata
     * @return \Illuminate\Http\Response
     */
    public function destroy($uplata)
    {
        $uplata = \App\Models\Uplata::find($uplata);
        return $this->exec_safe(function()use($uplata){
            $uplata->delete();
        });
    }
}
