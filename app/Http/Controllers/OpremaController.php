<?php

namespace App\Http\Controllers;

use App\Models\Oprema;
use App\Http\Requests\StoreOpremaRequest;
use App\Http\Requests\UpdateOpremaRequest;

class OpremaController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
    {
        $sorc_sub = \App\Models\Velicina::select(
            'velicinas.id','prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.sorc,NULL)) as sorcevi_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.sorc,NULL)) as sorcevi_z'),
        )
            ->join('prijavas', 'prijavas.sorc', 'velicinas.id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(empty($request->kamp_id), function($query){
                return $query->where('prijavas.kamp_id', -1);
            })
            ->groupBy('velicinas.id');
        $majica_sub = \App\Models\Velicina::select(
            'velicinas.id','prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.majica,NULL)) as majice_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.majica,NULL)) as majice_z'),
        )
            ->join('prijavas', 'prijavas.majica', 'velicinas.id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(empty($request->kamp_id), function($query){
                return $query->where('prijavas.kamp_id', -1);
            })
            ->groupBy('velicinas.id');
        $duks_sub = \App\Models\Velicina::select(
            'velicinas.id','prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.sorc,NULL)) as duksevi_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.sorc,NULL)) as duksevi_z'),
        )
            ->join('prijavas', 'prijavas.duks', 'velicinas.id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(empty($request->kamp_id), function($query){
                return $query->where('prijavas.kamp_id', -1);
            })
            ->groupBy('velicinas.id');
        // $sorc_sub = \App\Models\Velicina::select(
        //     'velicinas.id','prijavas.kamp_id',
        //     \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
        //     \DB::raw('COUNT(IF(prijavas.pol_id==1,prijavas.sorc,0)) as sorcevi_m'),
        //     \DB::raw('COUNT(IF(prijavas.pol_id==2,prijavas.sorc,0)) as sorcevi_z'),
        // )
        //     ->join('prijavas', 'prijavas.sorc', 'velicinas.id')
        //     ->groupBy('velicinas.id');
        return datatables()->of(
            \App\Models\Velicina::select('velicinas.id','velicinas.naziv', 
                'majice_m','majice_z',
                'duksevi_m','duksevi_z',
                'sorcevi_m','sorcevi_z'
                )
                ->joinSub($sorc_sub, 'sorcevi',function($join){ $join->on('sorcevi.id','velicinas.id'); })
                ->joinSub($majica_sub, 'majice',function($join){ $join->on('majice.id','velicinas.id'); })
                ->joinSub($duks_sub, 'duksevi',function($join){ $join->on('duksevi.id','velicinas.id'); })
            // \App\Models\Kamp::select('kamps.id','kamps.naziv', \DB::raw('GROUP_CONCAT(CONCAT(sorcevi.spisak,"<br>")) as sorcevi_spisak'))
            //     ->joinSub($sorc_sub, 'sorcevi',function($join){
            //         $join->on('sorcevi.kamp_id','kamps.id');
            //     })
            //     ->groupBy('kamps.id')
            //     ->toBase()->get()
            // \App\Models\Prijava::select(
            //     'prijavas.*',
            //     'v_m.naziv as velicina_majice',
            //     'v_s.naziv as velicina_sorca',
            //     'v_d.naziv as velicina_duksa',
            //     'ucesniks.ime',
            //     // 'v_m.naziv as velicina_majice',
            // )
            //     ->join('velicinas as v_m', 'v_m.id', 'prijavas.majica')
            //     ->join('velicinas as v_s', 'v_s.id', 'prijavas.sorc')
            //     ->join('velicinas as v_d', 'v_d.id', 'prijavas.duks')
            //     ->join('ucesniks', 'ucesniks.id', 'prijavas.ucesnik_id')
        )
            ->addColumn('action','oprema.partials.dt_actions')
            ->rawColumns(['action', 'sorcevi_spisak'])
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
     * @param  \App\Http\Requests\StoreOpremaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOpremaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oprema  $oprema
     * @return \Illuminate\Http\Response
     */
    public function show(Oprema $oprema)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Oprema  $oprema
     * @return \Illuminate\Http\Response
     */
    public function edit(Oprema $oprema)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOpremaRequest  $request
     * @param  \App\Models\Oprema  $oprema
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOpremaRequest $request, Oprema $oprema)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oprema  $oprema
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oprema $oprema)
    {
        //
    }
}
