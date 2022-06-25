<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IzvestajController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request){
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
            'ucesniks.datum_rodjenja',
            'prijavas.depozit_rsd',
            'prijavas.depozit_eur',
            'prijavas.ukupno_rsd',
            'prijavas.ukupno_eur',
            'prijavas.gratis',
            'prijavas.opstina',
            'prijavas.pregled_obavljen',
            \DB::raw('COUNT(DISTINCT prijavas.kamp_id) as broj_kampova'),
            \DB::raw('COUNT(prijava_smenas.smena_id) as broj_smena'),
            \DB::raw('GROUP_CONCAT(smenas.naziv) as smene'),
            \DB::raw('SUM(uplatas.iznos_rsd) as uplate_rsd'),
            \DB::raw('SUM(uplatas.iznos_eur) as uplate_eur'),
            'v_m.naziv as vel_majica',
            'v_s.naziv as vel_sorc',
            'v_d.naziv as vel_duks',
        )
            ->join('prijavas', 'prijavas.ucesnik_id', 'ucesniks.id')
            ->join('prijava_smenas','prijava_smenas.prijava_id','prijavas.id')
            ->leftJoin('smenas','smenas.id','prijava_smenas.smena_id')
            ->leftJoin('uplatas','uplatas.ucesnik_id', 'ucesniks.id')
            ->join('velicinas as v_m','v_m.id','prijavas.majica')
            ->join('velicinas as v_s','v_s.id','prijavas.sorc')
            ->join('velicinas as v_d','v_d.id','prijavas.duks')
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
            ->when(!empty($request->trener_id), function ($query) use ($request) {
                return $query->where('prijavas.trener_id', $request->trener_id);
            })
            ->groupBy('ucesniks.id')
            ->toBase()->get())
            ->addColumn('action', 'izvestaj.partials.dt_actions')
            ->addColumn('ucesnik', 'ucesnik.partials.dt_ucesnik')
            ->addColumn('puna_adresa', 'ucesnik.partials.dt_puna_adresa')
            ->addColumn('roditelj', 'ucesnik.partials.dt_roditelj')
            ->addColumn('uplate', 'ucesnik.partials.dt_uplate')
            ->addColumn('preostalo', 'ucesnik.partials.dt_preostalo')
            ->addColumn('ukupno', 'ucesnik.partials.dt_ukupno')
            ->addColumn('depozit', 'ucesnik.partials.dt_depozit')
            ->addColumn('oprema', 'ucesnik.partials.dt_oprema')
            ->rawColumns(['action', 'ucesnik', 'puna_adresa', 'roditelj','uplate','ukupno','depozit','oprema'])
            ->make(true);
    }
}