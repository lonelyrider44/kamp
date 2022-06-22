<?php

namespace App\Http\Controllers;

use App\Models\Smena;
use App\Http\Requests\StoreSmenaRequest;
use App\Http\Requests\UpdateSmenaRequest;
use Symfony\Component\HttpFoundation\Request;

class SmenaController extends Controller
{
    public function datatable(Request $request)
    {
        return datatables()->of(\App\Models\Smena::select(
            'smenas.id',
            'smenas.naziv',
            'smenas.datum_od',
            'smenas.datum_do',
            'kamps.cena_smene_rsd',
            'kamps.cena_smene_eur',
            'kamps.naziv as kamp',
            // \DB::raw('COUNT(IF(prijavas.status_id=1, prijava_smenas.id, NULL)) as broj_prijava'),
            \DB::raw('COUNT(IF(prijavas.status_id=1, prijava_smenas.id, NULL)) as broj_ucesnika'),
            \DB::raw('COUNT(IF(prijavas.status_id=1 and prijavas.pol_id=1, prijava_smenas.id, NULL)) as broj_muskih_ucesnika'),
            \DB::raw('COUNT(IF(prijavas.status_id=1 and prijavas.pol_id=2, prijava_smenas.id, NULL)) as broj_zenskih_ucesnika'),
            // \DB::raw('COUNT(IF(prijavas.Pol=1,1,NULL)) as broj_muskih_ucesnika'),
            // \DB::raw('COUNT(IF(prijavas.Pol=2,1,NULL)) as broj_zenskih_ucesnika'),
        )
            ->leftJoin('kamps', 'kamps.id', 'smenas.kamp_id')
            ->leftJoin('prijava_smenas','prijava_smenas.smena_id','smenas.id')
            ->leftJoin('prijavas','prijavas.id','prijava_smenas.prijava_id')
            // ->leftJoin('ucesnik_kampas','ucesnik_kampas.smena_id','smenas.id')
            // ->leftJoin('ucesniks', 'ucesniks.id', 'ucesnik_kampas.ucesnik_id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('smenas.kamp_id', $request->kamp_id);
            })
            ->groupBy('smenas.id')
            ->toBase())
            ->addColumn('cena', 'smena.partials.dt_cena')
            ->addColumn('action', 'smena.partials.dt_actions')
            ->addColumn('period', 'smena.partials.dt_period')
            ->addColumn('smena', 'smena.partials.dt_smena')
            ->with('kamp_id', $request->kamp_id)
            ->rawColumns(['action', 'period','cena','smena'])
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
     * @param  \App\Http\Requests\StoreSmenaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSmenaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function show(Smena $smena)
    {
        try{
            $smena->load('kamp');
            return response()->json($smena);
        }catch(\Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function edit(Smena $smena)
    {
        try{
            $smena = \App\Models\Smena::find($smena);
            return response()->json($smena);
        }catch(\Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSmenaRequest  $request
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSmenaRequest $request, Smena $smena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function destroy(Smena $smena)
    {
        //
    }
    public function ucesnici(\App\Models\Smena $smena){
        return response()->json(\App\Models\Ucesnik::zaSmenu($smena)->get());
    }
}
