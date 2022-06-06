<?php

namespace App\Http\Controllers;

use App\Models\Prijava;
use App\Http\Requests\StorePrijavaRequest;
use App\Http\Requests\UpdatePrijavaRequest;
use Illuminate\Http\Request;

class PrijavaController extends Controller
{
    public function datatable(Request $request){
        return datatables()->of(\App\Models\Prijava::select(
            'prijava_smenas.id',
            \DB::raw('CONCAT(prijavas.prezime," ",prijavas.ime) as ucesnik'),
            \DB::raw('GROUP_CONCAT(smenas.naziv) as smena'),
            'kamps.naziv as kamp',
            // 'smenas.id','smenas.naziv','smenas.datum_od','smenas.datum_do','smenas.cena',
            //     'kamps.naziv as kamp',
            //     \DB::raw('COUNT(ucesnik_kampas.id) as broj_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=1,1,NULL)) as broj_muskih_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=2,1,NULL)) as broj_zenskih_ucesnika'),
                )
            ->join('kamps','kamps.id','prijavas.kamp_id')
            ->join('prijava_smenas','prijava_smenas.prijava_id','prijavas.id')
            ->join('smenas', 'smenas.id','prijava_smenas.smena_id')
            // ->leftJoin('ucesnik_kampas','ucesnik_kampas.smena_id','smenas.id')
            // ->leftJoin('ucesniks', 'ucesniks.id','ucesnik_kampas.ucesnik_id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id',$request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                return $query->where('smenas.id', $request->smena_id);
            })
            ->groupBy('prijavas.id')
            // ->groupBy('smenas.id','smenas.naziv','smenas.datum_od','smenas.datum_do','smenas.cena','kamps.naziv')
            ->toBase())
            ->addColumn('action','prijava.partials.dt_actions')
            // ->addColumn('period','smena.partials.dt_period')
            ->with('kamp_id', $request->kamp_id)
            ->rawColumns(['action','period'])
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
     * @param  \App\Http\Requests\StorePrijavaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrijavaRequest $request)
    {
        try{
            \DB::beginTransaction();

            $prijava = \App\Models\Prijava::create($request->all());
            $prijava->smene()->sync($request->smene);
            $prijava->dodatni_paketi()->sync($request->dodatni_paketi);            

            \DB::commit();
            return response()->json($prijava);
        }catch(\Exception $e){
            \DB::rollback();
            return response()->json(['message'=>$e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return \Illuminate\Http\Response
     */
    public function show(Prijava $prijava)
    {
        return $prijava;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return \Illuminate\Http\Response
     */
    public function edit(Prijava $prijava)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrijavaRequest  $request
     * @param  \App\Models\Prijava  $prijava
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrijavaRequest $request, Prijava $prijava)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prijava $prijava)
    {
        //
    }
}
