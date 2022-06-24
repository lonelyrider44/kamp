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
            'kamps.cena_smene_rsd',
            'kamps.cena_smene_eur',
            'kamps.status_id',
            'mestos.naziv as lokacija',
            'kamp_statuses.naziv as status',
            // \DB::raw('COUNT(DISTINCT prijavas.id) as broj_prijava'),
            \DB::raw('CONCAT(COUNT(DISTINCT prijava_smenas.id),"/",COUNT(DISTINCT smenas.id)*kamps.broj_prijava) as broj_prijava'),
            // \DB::raw('COUNT(DISTINCT smenas.id)*kamps.broj_prijava as ukupno_mesta'),
            \DB::raw('COUNT(DISTINCT smenas.id) as broj_smena'),
            \DB::raw('COUNT(DISTINCT dodatni_pakets.id) as broj_paketa'),
            // \DB::raw('COALESCE(SUM(uplatas.iznos)+ucesnik_kampas.depozit) as uplaceno')
        )
            ->join('mestos', 'mestos.id', 'kamps.lokacija_id')
            ->join('kamp_statuses', 'kamp_statuses.id', 'kamps.status_id')
            // ->leftJoin('ucesnik_kampas', 'ucesnik_kampas.kamp_id', 'kamps.id')
            ->leftJoin('smenas', 'smenas.kamp_id', 'kamps.id')
            // ->leftJoin('uplatas', 'uplatas.ucesnik_kampa_id', 'ucesnik_kampas.id')
            ->leftJoin('dodatni_pakets', 'dodatni_pakets.kamp_id', 'kamps.id')
            ->leftJoin('prijavas', 'prijavas.kamp_id', 'kamps.id')
            ->leftJoin('prijava_smenas', 'prijava_smenas.prijava_id', 'prijavas.id')

            ->groupBy('kamps.id')
            ->toBase())
            // ->addColumn('broj_smena', '0')
            ->addColumn('cena', 'kamp.partials.dt_cena')
            ->addColumn('action', 'kamp.partials.dt_actions')
            ->addColumn('period', 'kamp.partials.dt_period')
            ->rawColumns(['period', 'action', 'cena'])
            ->make(true);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(\App\Models\Kamp::all()->each(function($kamp){
            $kamp->load(['smene']);
        }));
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
        return $this->exec_safe(function()use($request){

            $kamp = \App\Models\Kamp::create($request->all());
            $kamp->smene()->createMany($request->smene);
            $kamp->dodatni_paketi()->createMany($request->dodatni_paketi);
            $kamp->organizovani_prevoz()->createMany($request->organizovani_prevoz);

            $hotel = \App\Models\Hotel::updateOrCreate(['naziv' => $kamp->smestaj],[]);
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function show(Kamp $kamp)
    {
        $kamp->load(['smene', 'aktivne_smene','dodatni_paketi', 'organizovani_prevoz', 'lokacija']);
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
    public function update(StoreKampRequest $request, Kamp $kamp)
    {
        try {
            \DB::beginTransaction();
            $kamp->update($request->all());

            $kamp->smene()->whereNotIn('id', collect($request->smene)->pluck('id'))->delete();
            $kamp->smene()->upsert(
                collect($request->smene)->filter(function ($smena) {
                    return !empty($smena['id']);
                })->all(),
                ['id'],
                ['naziv', 'datum_od', 'datum_do']
            );
            $kamp->smene()->createMany(
                collect($request->smene)->filter(function ($smena) {
                    return empty($smena['id']);
                })->all()
            );

            $kamp->dodatni_paketi()->whereNotIn('id', collect($request->dodatni_paketi)->pluck('id'))->delete();
            $kamp->dodatni_paketi()->upsert(
                collect($request->dodatni_paketi)->filter(function ($dp) {
                    return !empty($dp['id']);
                })->all(),
                ['id'],
                ['naziv', 'opis', 'iznos_rsd', 'iznos_eur']
            );
            $kamp->dodatni_paketi()->createMany(
                collect($request->dodatni_paketi)->filter(function ($dp) {
                    return empty($dp['id']);
                })->all()
            );

            $kamp->organizovani_prevoz()->whereNotIn('id', collect($request->organizovani_prevoz)->pluck('id'))->delete();
            $kamp->organizovani_prevoz()->upsert(
                collect($request->organizovani_prevoz)->filter(function ($op) {
                    return !empty($op['id']);
                })->all(),
                ['id'],
                ['naziv', 'cena_rsd', 'cena_eur']
            );
            $kamp->organizovani_prevoz()->createMany(
                collect($request->organizovani_prevoz)->filter(function ($op) {
                    return empty($op['id']);
                })->all()
            );

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kamp $kamp)
    {
        try {
            \DB::beginTransaction();

            $kamp->smene()->delete();
            $kamp->organizovani_prevoz()->delete();
            $kamp->dodatni_paketi()->delete();
            $kamp->delete();

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function aktivni()
    {
        return response()->json(\App\Models\Kamp::aktivni()->first());
    }
    public function aktivni2()
    {
        return response()->json(\App\Models\Kamp::aktivni()->get()->each(function($kamp){
            $kamp->load(['aktivne_smene','dodatni_paketi','organizovani_prevoz']);
        }));
    }
    public function statusi()
    {
        return response()->json(\App\Models\KampStatus::all());
    }
    public function smene(\App\Models\Kamp $kamp)
    {
        return response()->json($kamp->smene);
    }

    public function ucesnici(\App\Models\Kamp $kamp)
    {
        return response()->json(\App\Models\Ucesnik::zaKamp($kamp)->get());
    }

    public function dashboard_stats(\App\Models\Kamp $kamp)
    {
        $kamp->load(['smene']);
        // $stats['godista_chart'] = \App\Models\Prijava::selectRaw('YEAR(datum_rodjenja) as godiste')
        //     ->where('kamp_id', $kamp->id)->groupBy('godiste')->get()->pluck('godiste')->all();
        // $stats['godista_chart_svi'] = collect($stats['godista_chart'])->map(function($godiste){

        // });
        $stats['godista'] = \App\Models\Prijava::selectRaw('YEAR(datum_rodjenja) as godiste')
            ->where('kamp_id', $kamp->id)->groupBy('godiste')->get()->pluck('godiste')->map(function ($godiste) use ($kamp) {
                return [
                    'godiste' => $godiste,
                    'smene' => \App\Models\Smena::where('kamp_id', $kamp->id)->get()->map(function ($smena) use ($kamp, $godiste) {
                        return [
                            'naziv' => $smena->naziv,
                            'broj_ucesnika' => \App\Models\Prijava::whereRaw("YEAR(datum_rodjenja)=$godiste")
                                ->whereIn(
                                    'id',
                                    \App\Models\PrijavaSmena::where('smena_id', $smena->id)->get()->pluck('prijava_id')
                                )
                                ->get()->count()
                        ];
                    })
                ];
            });
        $stats['godista_decaci'] = \App\Models\Prijava::selectRaw('YEAR(datum_rodjenja) as godiste')
            ->where('kamp_id', $kamp->id)->where('pol_id', 1)->groupBy('godiste')->get()->pluck('godiste')->map(function ($godiste) use ($kamp) {
                return [
                    'godiste' => $godiste,
                    'smene' => \App\Models\Smena::where('kamp_id', $kamp->id)->get()->map(function ($smena) use ($kamp, $godiste) {
                        return [
                            'naziv' => $smena->naziv,
                            'broj_ucesnika' => \App\Models\Prijava::whereRaw("YEAR(datum_rodjenja)=$godiste")
                                ->where('pol_id', 1)
                                ->whereIn(
                                    'id',
                                    \App\Models\PrijavaSmena::where('smena_id', $smena->id)->get()->pluck('prijava_id')
                                )
                                ->get()->count()
                        ];
                    })
                ];
            });
        $stats['godista_devojcice'] = \App\Models\Prijava::selectRaw('YEAR(datum_rodjenja) as godiste')
            ->where('kamp_id', $kamp->id)->where('pol_id', 2)->groupBy('godiste')->get()->pluck('godiste')->map(function ($godiste) use ($kamp) {
                return [
                    'godiste' => $godiste,
                    'smene' => \App\Models\Smena::where('kamp_id', $kamp->id)->get()->map(function ($smena) use ($kamp, $godiste) {
                        return [
                            'naziv' => $smena->naziv,
                            'broj_ucesnika' => \App\Models\Prijava::whereRaw("YEAR(datum_rodjenja)=$godiste")
                                ->where('pol_id', 2)
                                ->whereIn(
                                    'id',
                                    \App\Models\PrijavaSmena::where('smena_id', $smena->id)->get()->pluck('prijava_id')
                                )
                                ->get()->count()
                        ];
                    })
                ];
            });
        // $stats['godista_devojcice'] = \App\Models\Prijava::selectRaw('YEAR(datum_rodjenja) as godiste')
        //     ->where('kamp_id', $kamp->id)->where('pol_id', 1)->groupBy('godiste')->get()->pluck('godiste')->all();
        $stats['ukupno_mesta'] = $kamp->broj_prijava * $kamp->smene->count();
        $stats['ukupno_prijava'] = $kamp->prijave->count();

        $stats['smene'] = $kamp->smene->map(function ($smena) use ($kamp) {
            $godista = \App\Models\Prijava::select(
                \DB::raw('YEAR(datum_rodjenja) as godiste'),
                \DB::raw('COUNT(IF(pol_id=1,1,NULL)) as broj_decaka'),
                \DB::raw('COUNT(IF(pol_id=2,1,NULL)) as broj_devojcica'),
                \DB::raw('COUNT(*) as broj_ukupno')
            )
                ->join('prijava_smenas', 'prijava_smenas.prijava_id', 'prijavas.id')
                ->where('smena_id', $smena->id)
                ->groupBy('godiste')->get();
            return [
                'naziv' => $smena->naziv,
                'broj_mesta' => $kamp->broj_prijava,
                'broj_prijava' => \App\Models\PrijavaSmena::where('smena_id', $smena->id)->count(),
                'broj_decaka' => \App\Models\Prijava::where('pol_id', 1)->whereIn('id', \App\Models\PrijavaSmena::where('smena_id', $smena->id)->get()->pluck('prijava_id'))->count(),
                'broj_devojcica' => \App\Models\Prijava::where('pol_id', 2)->whereIn('id', \App\Models\PrijavaSmena::where('smena_id', $smena->id)->get()->pluck('prijava_id'))->count(),
                'chart_godista' => $godista->pluck('godiste')->all(),
                'chart_ukupno' => $godista->pluck('broj_ukupno')->all(),
                'chart_decaci' => $godista->pluck('broj_decaka')->all(),
                'chart_devojcice' => $godista->pluck('broj_devojcica')->all(),
                'chart_data' => [
                    ['data' => $godista->pluck('broj_decaka')->all(), 'label' => 'Dečaci', 'backgroundColor'=> 'blue'],
                    ['data' => $godista->pluck('broj_devojcica')->all(), 'label' => 'Devojčice','backgroundColor'=> 'red'],
                    ['data' => $godista->pluck('broj_ukupno')->all(), 'label' => 'Ukupno','backgroundColor'=> 'brown'],
                ]
            ];
        })->all();
        $stats['drzave'] = \App\Models\Prijava::select('drzava', \DB::raw('count(*) as broj_prijava'))->where('kamp_id', $kamp->id)->groupBy('drzava')->orderBy('broj_prijava', 'desc')->get()->all();
        $stats['gratis'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('gratis', true)->count();
        $stats['zabrana_prijave'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('status_id', 4)->count();
        $stats['otkazane_smene'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('status_id', 2)->count();
        $stats['nije_se_pojavilo'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('status_id', 3)->count();
        $stats['donosi_depozit_u_kamp'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('donosi_depozit_u_kamp', true)->count();
        // $stats['donosi_u_kamp'] = \App\Models\Prijava::where('kamp_id', $kamp->id)->where('status_depozita', 2)->count();
        $stats['uplatilo'] = \App\Models\Uplata::where('kamp_id', $kamp->id)->count();

        return response()->json($stats);
    }
}
