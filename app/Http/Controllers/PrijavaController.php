<?php

namespace App\Http\Controllers;

use App\Models\Prijava;
use App\Http\Requests\StorePrijavaRequest;
use App\Http\Requests\UpdatePrijavaRequest;
use Illuminate\Http\Request;

class PrijavaController extends Controller
{
    public function datatable(Request $request){
        $prijave_sub = \App\Models\Prijava::select('prijavas.ucesnik_id',\DB::raw('COUNT(prijava_smenas.smena_id) as ukupno_smena'))
            ->join('prijava_smenas','prijava_smenas.prijava_id', 'prijavas.id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id',$request->kamp_id);
            })
            ->groupBy('prijavas.ucesnik_id')->toBase();
        $prijava_smena_sub = \App\Models\Prijava::select(
            'prijavas.id',
            \DB::raw('YEAR(prijavas.datum_rodjenja) as godiste'),
            // 'prijava_smenas.prijava_id',
            \DB::raw('CONCAT(prijavas.prezime," ",prijavas.ime) as ucesnik'),
            // \DB::raw('smenas.naziv as smena'),
            \DB::raw('GROUP_CONCAT(smenas.naziv) as smena'),
            'kamps.naziv as kamp',
            // 'ps.ukupno_smena'
            // 'smenas.id','smenas.naziv','smenas.datum_od','smenas.datum_do','smenas.cena',
            //     'kamps.naziv as kamp',
            //     \DB::raw('COUNT(ucesnik_kampas.id) as broj_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=1,1,NULL)) as broj_muskih_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=2,1,NULL)) as broj_zenskih_ucesnika'),
                )
            ->join('kamps','kamps.id','prijavas.kamp_id')
            ->join('prijava_smenas','prijava_smenas.prijava_id','prijavas.id')
            ->join('smenas', 'smenas.id','prijava_smenas.smena_id')
            ->joinSub($prijave_sub,'ps', function($join){
                $join->on('ps.ucesnik_id','prijavas.ucesnik_id');
            })
            // ->leftJoin('ucesnik_kampas','ucesnik_kampas.smena_id','smenas.id')
            // ->leftJoin('ucesniks', 'ucesniks.id','ucesnik_kampas.ucesnik_id')
            ->when(!empty($request->kamp_id), function($query)use($request){
                return $query->where('prijavas.kamp_id',$request->kamp_id);
            })
            ->when(!empty($request->smena_id), function ($query) use ($request) {
                return $query->where('smenas.id', $request->smena_id);
            })
            ->when(!empty($request->ucesnik_id), function ($query) use ($request) {
                return $query->where('prijavas.ucesnik_id', $request->ucesnik_id);
            })
            ->groupBy('prijavas.ucesnik_id')
            // ->groupBy('smenas.id','smenas.naziv','smenas.datum_od','smenas.datum_do','smenas.cena','kamps.naziv')
            ->toBase();
        return datatables()->of($prijava_smena_sub)
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
        return $this->exec_safe(function()use($request){
            $prijava = \App\Models\Prijava::create($request->all());
            $prijava->saglasnost()->save(new PrijavaSaglasnost($request->all()));
            $prijava->smene()->sync($request->smene);
            $prijava->dodatni_paketi()->sync($request->dodatni_paketi);            
            $prijava->updateCena();

            if(!empty($request->pregled_obavljen) && !empty($request->lekar_id)){
                $pregled = $prijava->pregled()->save(new PrijavaPregledController($request->all()));
                $pregled->parametri->sync($request->parametri_pregleda);
            }
            return response()->json($prijava);
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prijava  $prijava
     * @return \Illuminate\Http\Response
     */
    public function show(Prijava $prijava)
    {
        $prijava->kamp->load(['smene','aktivne_smene','dodatni_paketi','organizovani_prevoz']);
        $prijava->kamp->smene->each(function($smena){
            $smena->load(['prijave']);
        });
        $prijava->load(['pregled.parametri']);
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
        return $this->exec_safe(function()use($request, $prijava){
            // $prijava = \App\Models\Prijava::create($request->all());
            $prijava->update($request->all());
            $prijava->smene()->sync($request->smene);
            $prijava->dodatni_paketi()->sync($request->dodatni_paketi);            
            // $prijava->updateCena();
            return response()->json($prijava);
        });
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
    public function cimeri(\App\Models\Prijava $prijava, $broj_sobe){
        return response()->json(
            \App\Models\Prijava::where('ucesnik_id', '!=',$prijava->ucesnik_id)
                ->where('kamp_id',$prijava->kamp_id)
                ->where('broj_sobe', $broj_sobe)
                ->toBase()->get()
        );
    }

    public function statusi(){
        return response()->json(\App\Models\PrijavaStatus::all());
    }
}
