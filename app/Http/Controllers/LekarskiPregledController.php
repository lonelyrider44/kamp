<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LekarskiPregledController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
    {
        $prijave_sub = \App\Models\Prijava::select('prijavas.ucesnik_id', \DB::raw('COUNT(prijava_smenas.smena_id) as ukupno_smena'))
            ->join('prijava_smenas', 'prijava_smenas.prijava_id', 'prijavas.id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('prijavas.kamp_id', $request->kamp_id);
            })
            ->groupBy('prijavas.ucesnik_id')->toBase();
        $prijava_smena_sub = \App\Models\Prijava::select(
            'prijavas.id',
            'prijavas.pregled_obavljen',
            \DB::raw('YEAR(prijavas.datum_rodjenja) as godiste'),
            // 'prijava_smenas.prijava_id',
            \DB::raw('CONCAT(prijavas.prezime," ",prijavas.ime) as ucesnik'),
            // \DB::raw('smenas.naziv as smena'),
            \DB::raw('GROUP_CONCAT(smenas.naziv) as smena'),
            'kamps.naziv as kamp',
            'prijava_pregleds.datum_pregleda',
            'prijava_pregleds.napomena'
            // 'ps.ukupno_smena'
            // 'smenas.id','smenas.naziv','smenas.datum_od','smenas.datum_do','smenas.cena',
            //     'kamps.naziv as kamp',
            //     \DB::raw('COUNT(ucesnik_kampas.id) as broj_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=1,1,NULL)) as broj_muskih_ucesnika'),
            //     \DB::raw('COUNT(IF(ucesniks.pol=2,1,NULL)) as broj_zenskih_ucesnika'),
        )
            ->join('kamps', 'kamps.id', 'prijavas.kamp_id')
            ->join('prijava_smenas', 'prijava_smenas.prijava_id', 'prijavas.id')
            ->join('smenas', 'smenas.id', 'prijava_smenas.smena_id')
            ->leftJoin('prijava_pregleds','prijava_pregleds.prijava_id','prijavas.id')
            ->joinSub($prijave_sub, 'ps', function ($join) {
                $join->on('ps.ucesnik_id', 'prijavas.ucesnik_id');
            })
            // ->leftJoin('ucesnik_kampas','ucesnik_kampas.smena_id','smenas.id')
            // ->leftJoin('ucesniks', 'ucesniks.id','ucesnik_kampas.ucesnik_id')
            ->when(!empty($request->kamp_id), function ($query) use ($request) {
                return $query->where('prijavas.kamp_id', $request->kamp_id);
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
            ->addColumn('action', 'lekarski_pregled.partials.dt_actions')
            // ->addColumn('period','smena.partials.dt_period')
            ->with('kamp_id', $request->kamp_id)
            ->rawColumns(['action', 'period'])
            ->make(true);
    }

    public function update(\Illuminate\Http\Request $request, $id){
        $this->exec_safe(function()use($request,$id){
            $prijava = \App\Models\Prijava::find($id);
            $prijava->update($request->all());
            if(!empty($prijava->pregled)){
                $prijava->pregled->update($request->all());
                $prijava->pregled->parametri()->whereNotIn('id', collect($request->parametri_pregleda)->pluck('id'))->delete();
                $prijava->pregled->parametri()->upsert(
                    collect($request->parametri_pregleda)->filter(function($parametar){
                        return !empty($parametar['id']);
                    })->all(),
                    ['id'],
                    ['naziv','vrednost']
                );
                return ['update', $prijava->pregled];
            }else{
                $pregled = $prijava->pregled()->save(new \App\Models\PrijavaPregled($request->all()));
                $pregled->parametri()->createMany($request->parametri_pregleda);
    
                return ['create', $pregled];

            }

        });
    }
}
