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
            'velicinas.id',
            'prijavas.pol_id',
            'prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(prijavas.sorc) as sorcevi'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.sorc,NULL)) as sorcevi_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.sorc,NULL)) as sorcevi_z'),
        )
            ->join('prijavas', 'prijavas.sorc', 'velicinas.id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                $query->whereIn('prijavas.id', function ($query) use ($request) {
                    $query->select('prijava_smenas.prijava_id')
                        ->from('prijava_smenas')
                        ->where('prijava_smenas.smena_id', $request->smena_id);
                });
            })
            // ->when(empty($request->smena_id), function ($query) {
            //     return $query->where('prijavas.kamp_id', -1);
            // })
            ->groupBy('velicinas.id', 'prijavas.pol_id');
        $majica_sub = \App\Models\Velicina::select(
            'velicinas.id',
            'prijavas.pol_id',
            'prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(prijavas.majica) as majice'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.majica,NULL)) as majice_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.majica,NULL)) as majice_z'),
        )
            ->join('prijavas', 'prijavas.majica', 'velicinas.id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                $query->whereIn('prijavas.id', function ($query) use ($request) {
                    $query->select('prijava_smenas.prijava_id')
                        ->from('prijava_smenas')
                        ->where('prijava_smenas.smena_id', $request->smena_id);
                });
            })
            // ->when(empty($request->smena_id), function ($query) {
            //     return $query->where('prijavas.kamp_id', -1);
            // })
            ->groupBy('velicinas.id', 'prijavas.pol_id');
        $duks_sub = \App\Models\Velicina::select(
            'velicinas.id',
            'prijavas.pol_id',
            'prijavas.kamp_id',
            // \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
            \DB::raw('COUNT(prijavas.duks) as duksevi'),
            \DB::raw('COUNT(IF(prijavas.pol_id=1,prijavas.duks,NULL)) as duksevi_m'),
            \DB::raw('COUNT(IF(prijavas.pol_id=2,prijavas.duks,NULL)) as duksevi_z'),
        )
            ->join('prijavas', 'prijavas.duks', 'velicinas.id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                $query->whereIn('prijavas.id', function ($query) use ($request) {
                    $query->select('prijava_smenas.prijava_id')
                        ->from('prijava_smenas')
                        ->where('prijava_smenas.smena_id', $request->smena_id);
                });
            })
            // ->when(empty($request->smena_id), function ($query) {
            //     return $query->where('prijavas.kamp_id', -1);
            // })
            ->groupBy('velicinas.id', 'pol_id');
        // $sorc_sub = \App\Models\Velicina::select(
        //     'velicinas.id','prijavas.kamp_id',
        //     \DB::raw('CONCAT("vel. ",velicinas.naziv," - ",COUNT(prijavas.sorc)," kom") as spisak'),
        //     \DB::raw('COUNT(IF(prijavas.pol_id==1,prijavas.sorc,0)) as sorcevi_m'),
        //     \DB::raw('COUNT(IF(prijavas.pol_id==2,prijavas.sorc,0)) as sorcevi_z'),
        // )
        //     ->join('prijavas', 'prijavas.sorc', 'velicinas.id')
        //     ->groupBy('velicinas.id');
        return datatables()->of(
            \App\Models\Velicina::select(
                'velicinas.id',
                'velicinas.naziv',
                'majice_m',
                'majice_z',
                'majice',
                'duksevi_m',
                'duksevi_z',
                'duksevi',
                'sorcevi_m',
                'sorcevi_z',
                'sorcevi',
                'pols.naziv as pol',
                'pols.id as pol_id',
                'velicinas.id as velicina_id',
                \DB::raw('CONCAT(velicinas.naziv," - ",pols.naziv) as velicina_pol')
            )
                ->crossJoin('pols')
                ->joinSub($sorc_sub, 'sorcevi', function ($join) {
                    $join->on('sorcevi.id', 'velicinas.id')->on('sorcevi.pol_id', 'pols.id');
                })
                ->joinSub($majica_sub, 'majice', function ($join) {
                    $join->on('majice.id', 'velicinas.id')->on('majice.pol_id', 'pols.id');
                })
                ->joinSub($duks_sub, 'duksevi', function ($join) {
                    $join->on('duksevi.id', 'velicinas.id')->on('duksevi.pol_id', 'pols.id');
                })
                ->orderBy('velicinas.id')
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
            ->addColumn('majice_broj', 'oprema.partials.dt_majice_broj')
            ->addColumn('sorcevi_broj', 'oprema.partials.dt_sorcevi_broj')
            ->addColumn('duksevi_broj', 'oprema.partials.dt_duksevi_broj')
            ->addColumn('action', 'oprema.partials.dt_actions')
            ->rawColumns(['action', 'sorcevi_spisak', 'majice_broj', 'duksevi_broj', 'sorcevi_broj'])
            ->make(true);
    }

    public function datatable_ucesnici(\Illuminate\Http\Request $request)
    {
        $ucesnici = \App\Models\Ucesnik::select(
            // 'ucesniks.*',
            'ucesniks.id',
            \DB::raw('CONCAT(ucesniks.prezime," ",ucesniks.ime) as ucesnik'),
            'v_m.naziv as velicina_majice',
            'v_s.naziv as velicina_sorca',
            'v_d.naziv as velicina_duksa',
            'pols.naziv as pol',
            'prijava_statuses.naziv as status',
            \DB::raw('GROUP_CONCAT(smenas.naziv) as smene'),
            \DB::raw('COUNT(prijava_smenas.id) as broj_smena'),
        )
            ->join('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
            ->join('prijava_statuses', 'prijava_statuses.id', 'prijavas.status_id')
            ->join('prijava_smenas', 'prijava_smenas.prijava_id', 'prijavas.id')
            ->join('pols', 'pols.id', 'prijavas.pol_id')
            ->join('velicinas as v_m', 'v_m.id', 'prijavas.majica')
            ->join('velicinas as v_s', 'v_s.id', 'prijavas.sorc')
            ->join('velicinas as v_d', 'v_d.id', 'prijavas.duks')
            ->join('smenas', 'smenas.id', 'prijava_smenas.smena_id')
            ->when(!empty($request->majica), function ($query) use ($request) {
                return $query->where('prijavas.majica', $request->majica);
            })
            ->when(!empty($request->duks), function ($query) use ($request) {
                return $query->where('prijavas.duks', $request->duks);
            })
            ->when(!empty($request->sorc), function ($query) use ($request) {
                return $query->where('prijavas.sorc', $request->sorc);
            })
            ->when(!empty($request->pol_id), function ($query) use ($request) {
                return $query->where('prijavas.pol_id', $request->pol_id);
            })
            ->where('prijavas.kamp_id', $request->kamp_id ?? -1)
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                return $query->whereIn('ucesniks.id', function ($query) use ($request) {
                    $query->select('p.ucesnik_id')
                        ->from('prijavas as p')
                        ->join('prijava_smenas as ps', 'ps.prijava_id', 'p.id')
                        ->where('ps.smena_id', $request->smena_id ?? -1);
                    // ->where('p.pol_id', $request->pol_id ?? null)
                    // ->where("p.$request->oprema", $request->velicina_id);
                    // ->when($request->oprema == "majica")
                });
            })
            ->groupBy('ucesniks.id')
            ->toBase();

        // $treneri = \App\Models\Trener::select(
        //     'treners.id',
        //     \DB::raw('CONCAT(treners.prezime," ",treners.ime) as trener'),
        //     'v_m.naziv as velicina_majice',
        //     'v_s.naziv as velicina_sorca',
        //     'v_d.naziv as velicina_duksa',
        //     'pols.naziv as pol'
        // )
        //     // ->join('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
        //     ->join('pols','pols.id','treners.pol_id')
        //     ->join('velicinas as v_m', 'v_m.id', 'treners.majica')
        //     ->join('velicinas as v_s', 'v_s.id', 'treners.sorc')
        //     ->join('velicinas as v_d', 'v_d.id', 'treners.duks')
        //     ->when(!empty($request->majica), function ($query) use ($request) {
        //         return $query->where('treners.majica', $request->majica);
        //     })
        //     ->when(!empty($request->duks), function ($query) use ($request) {
        //         return $query->where('treners.duks', $request->duks);
        //     })
        //     ->when(!empty($request->sorc), function ($query) use ($request) {
        //         return $query->where('treners.sorc', $request->sorc);
        //     })
        //     ->when(!empty($request->pol_id), function ($query) use ($request) {
        //         return $query->where('treners.pol_id', $request->pol_id);
        //     })->toBase();
        //     // ->where('prijavas.kamp_id', $request->kamp_id ?? -1)
        //     // ->whereIn('ucesniks.id', function ($query) use ($request) {
        //     //     $query->select('prijavas.ucesnik_id')
        //     //         ->from('prijavas as p')
        //     //         ->join('prijava_smenas', 'prijava_smenas.prijava_id', 'p.id')
        //     //         ->where('prijava_smenas.smena_id', $request->smena_id ?? -1);
        //     //         // ->where('p.pol_id', $request->pol_id ?? null)
        //     //         // ->where("p.$request->oprema", $request->velicina_id);
        //     //     // ->when($request->oprema == "majica")
        //     // });
        //     $mergeTbl = $ucesnici->unionAll($treneri);
        //     $ucesnici = \DB::table(\DB::raw("({$mergeTbl->toSql()}) as mg"))->mergeBindings($mergeTbl);
        return datatables()->of($ucesnici)
            ->make(true);
    }
    public function datatable_treneri(\Illuminate\Http\Request $request)
    {
        $treneri = \App\Models\Trener::select(
            // 'ucesniks.*',
            'treners.id',
            \DB::raw('CONCAT(treners.prezime," ",treners.ime) as trener'),
            'v_m.naziv as velicina_majice',
            'v_s.naziv as velicina_sorca',
            'v_d.naziv as velicina_duksa',
            'v_t.naziv as velicina_trenerke',
            'pols.naziv as pol',
            // 'prijava_statuses.naziv as status',
            // \DB::raw('GROUP_CONCAT(smenas.naziv) as smene'),
            // \DB::raw('COUNT(prijava_smenas.id) as broj_smena'),
        )
            // ->join('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
            // ->join('prijava_statuses','prijava_statuses.id','prijavas.status_id')
            // ->join('prijava_smenas','prijava_smenas.prijava_id','prijavas.id')
            ->join('pols', 'pols.id', 'treners.pol_id')
            ->leftJoin('velicinas as v_m', 'v_m.id', 'treners.majica')
            ->leftJoin('velicinas as v_s', 'v_s.id', 'treners.sorc')
            ->leftJoin('velicinas as v_d', 'v_d.id', 'treners.duks')
            ->leftJoin('velicinas as v_t', 'v_t.id', 'treners.duks')
            // ->join('smenas','smenas.id','prijava_smenas.smena_id')
            ->when(!empty($request->majica), function ($query) use ($request) {
                return $query->where('treners.majica', $request->majica);
            })
            ->when(!empty($request->duks), function ($query) use ($request) {
                return $query->where('treners.duks', $request->duks);
            })
            ->when(!empty($request->sorc), function ($query) use ($request) {
                return $query->where('treners.sorc', $request->sorc);
            })
            ->when(!empty($request->trenerka), function ($query) use ($request) {
                return $query->where('treners.trenerka', $request->trenerka);
            })
            ->when(!empty($request->pol_id), function ($query) use ($request) {
                return $query->where('treners.pol_id', $request->pol_id);
            })
            // ->where('prijavas.kamp_id', $request->kamp_id ?? -1)
            // ->when(!empty($request->smena_id), function($query)use($request){
            //     return $query->whereIn('ucesniks.id', function ($query) use ($request) {
            //         $query->select('p.ucesnik_id')
            //             ->from('prijavas as p')
            //             ->join('prijava_smenas as ps', 'ps.prijava_id', 'p.id')
            //             ->where('ps.smena_id', $request->smena_id ?? -1);
            //             // ->where('p.pol_id', $request->pol_id ?? null)
            //             // ->where("p.$request->oprema", $request->velicina_id);
            //         // ->when($request->oprema == "majica")
            //     });
            // })
            // ->groupBy('ucesniks.id')
            ->toBase();
        return datatables()->of($treneri)
            ->make(true);
    }
    public function statistika(\Illuminate\Http\Request $request)
    {
        
        $kamp = \App\Models\Kamp::find($request->kamp_id);
        if(empty($kamp)) return response()->json(null);
        $velicine = \App\Models\Velicina::toBase()->get();
        $smene = \App\Models\Smena::where('kamp_id', $kamp->id)->toBase()->get();
        $prijave = \App\Models\Prijava::where('kamp_id', $kamp->id)->toBase()->get();
        $prijave_smene = \App\Models\PrijavaSmena::whereIn('prijava_id', $prijave->pluck('id'))->toBase()->get();

        return [
            'velicine' => $velicine->map(function($v){
                return [
                    'naziv' => $v->naziv
                ];
            }),
            'devojcice' => [
                'velicine' => $velicine->map(function($v)use($kamp,$prijave){
                    return [
                        'naziv' => $v->naziv,
                        'ukupno_majice' => $prijave->where('majica', $v->id)->count(),
                        'ukupno_majice_decaci' => $prijave->where('majica', $v->id)->where('pol_id', 1)->count(),
                        'ukupno_majice_devojcice' => $prijave->where('majica', $v->id)->where('pol_id',2)->count(),

                        'ukupno_sorceva' => $prijave->where('sorc', $v->id)->count(),
                        'ukupno_sorceva_decaci' => $prijave->where('sorc', $v->id)->where('pol_id', 1)->count(),
                        'ukupno_sorceva_devojcice' => $prijave->where('sorc', $v->id)->where('pol_id',2)->count(),

                        'ukupno_dukseva' => $prijave->where('duks', $v->id)->count(),
                        'ukupno_dukseva_decaci' => $prijave->where('duks', $v->id)->where('pol_id', 1)->count(),
                        'ukupno_dukseva_devojcice' => $prijave->where('duks', $v->id)->where('pol_id',2)->count(),
                    ];
                        
                }),
                'smene' => $smene->map(function($smena)use($kamp,$prijave, $prijave_smene,$velicine){
                    $ps = $prijave_smene->where('smena_id', $smena->id);
                    $p = $prijave->whereIn('id',$ps->pluck('prijava_id'));
                    return [
                        'naziv'=>$smena->naziv,
                        'velicine' => $velicine->map(function($v)use($kamp,$p){
                            return [
                                'naziv' => $v->naziv,
                                'ukupno_majice' => $p->where('majica', $v->id)->count(),
                                'ukupno_majice_decaci' => $p->where('majica', $v->id)->where('pol_id', 1)->count(),
                                'ukupno_majice_devojcice' => $p->where('majica', $v->id)->where('pol_id',2)->count(),
        
                                'ukupno_sorceva' => $p->where('sorc', $v->id)->count(),
                                'ukupno_sorceva_decaci' => $p->where('sorc', $v->id)->where('pol_id', 1)->count(),
                                'ukupno_sorceva_devojcice' => $p->where('sorc', $v->id)->where('pol_id',2)->count(),
        
                                'ukupno_dukseva' => $p->where('duks', $v->id)->count(),
                                'ukupno_dukseva_decaci' => $p->where('duks', $v->id)->where('pol_id', 1)->count(),
                                'ukupno_dukseva_devojcice' => $p->where('duks', $v->id)->where('pol_id',2)->count(),
                            ];
                                
                        })
                    ];
                })
            ],
            'decaci' => [

            ],
            'smene' => $smene->map(function($smena)use($kamp,$prijave, $prijave_smene,$velicine){
                $ps = $prijave_smene->where('smena_id', $smena->id);
                $p = $prijave->whereIn('id',$ps->pluck('prijava_id'));
                return [
                    'naziv'=>$smena->naziv,
                    'velicine' => $velicine->map(function($v)use($p){
                        return [
                            'naziv' => $v->naziv,
                            'ukupno_majice' => $p->where('majica', $v->id)->count(),
    
                            'ukupno_sorceva' => $p->where('sorc', $v->id)->count(),
    
                            'ukupno_dukseva' => $p->where('duks', $v->id)->count(),
                        ];
                            
                    }),
                    'polovi' => \App\Models\Pol::toBase()->get()->map(function($pol)use($p, $velicine){
                        return [
                            'naziv' => $pol->id==1?"Dečaci":"Devojčice",
                            'velicine' => $velicine->map(function($v)use($p,$pol){
                                return [
                                    'naziv' => $v->naziv,
                                    'ukupno_majice' => $p->where('majica', $v->id)->count(),
                                    'ukupno_majice_pol' => $p->where('majica', $v->id)->where('pol_id', $pol->id)->count(),
            
                                    'ukupno_sorceva' => $p->where('sorc', $v->id)->count(),
                                    'ukupno_sorceva_pol' => $p->where('sorc', $v->id)->where('pol_id', $pol->id)->count(),
            
                                    'ukupno_dukseva' => $p->where('duks', $v->id)->count(),
                                    'ukupno_dukseva_pol' => $p->where('duks', $v->id)->where('pol_id', $pol->id)->count(),
                                ];
                                    
                            })    
                        ];
                    }),
                    'velicine' => $velicine->map(function($v)use($kamp,$p){
                        return [
                            'naziv' => $v->naziv,
                            'ukupno_majice' => $p->where('majica', $v->id)->count(),
                            'ukupno_majice_decaci' => $p->where('majica', $v->id)->where('pol_id', 1)->count(),
                            'ukupno_majice_devojcice' => $p->where('majica', $v->id)->where('pol_id',2)->count(),
    
                            'ukupno_sorceva' => $p->where('sorc', $v->id)->count(),
                            'ukupno_sorceva_decaci' => $p->where('sorc', $v->id)->where('pol_id', 1)->count(),
                            'ukupno_sorceva_devojcice' => $p->where('sorc', $v->id)->where('pol_id',2)->count(),
    
                            'ukupno_dukseva' => $p->where('duks', $v->id)->count(),
                            'ukupno_dukseva_decaci' => $p->where('duks', $v->id)->where('pol_id', 1)->count(),
                            'ukupno_dukseva_devojcice' => $p->where('duks', $v->id)->where('pol_id',2)->count(),
                        ];
                            
                    })
                ];
            })
        ];
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
    // public function show(\App\Models\Velicina $oprema)
    public function show($oprema)
    {
        return response()->json($oprema);
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
