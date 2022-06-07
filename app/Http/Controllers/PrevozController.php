<?php

namespace App\Http\Controllers;

use App\Models\Prevoz;
use App\Http\Requests\StorePrevozRequest;
use App\Http\Requests\UpdatePrevozRequest;

class PrevozController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
    {
        return datatables()->of(
            \App\Models\Prijava::select(
                'prijavas.*',
                'ucesniks.ime',
                'ucesniks.prezime',
                'ucesniks.email',
                'ucesniks.telefon',
                'roditeljs.ime as ime_r',
                'roditeljs.prezime as prezime_r',
                'roditeljs.email as email_r',
                'roditeljs.telefon as telefon_r',
                'tip_prevozas.naziv as prevoz',
                'organizovani_prevozs.naziv as organizovani_prevoz',
            )
                ->join('ucesniks', 'ucesniks.id', 'prijavas.ucesnik_id')
                ->join('roditeljs', 'roditeljs.id', 'prijavas.roditelj_id')
                ->join('tip_prevozas', 'tip_prevozas.id', 'prijavas.tip_prevoza_id')
                ->leftJoin('organizovani_prevozs', 'organizovani_prevozs.id', 'prijavas.organizovani_prevoz')
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
                ->when(empty($request->kamp_id)&&empty($request->smena_id), function ($query) {
                    return $query->where('prijavas.kamp_id', -1);
                })
        )
            ->addColumn('ucesnik', 'hotel.partials.dt_ucesnik')
            ->addColumn('roditelj', 'hotel.partials.dt_roditelj')
            ->addColumn('action', 'prevoz.partials.dt_actions')
            ->rawColumns(['ucesnik', 'roditelj', 'action'])
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
     * @param  \App\Http\Requests\StorePrevozRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrevozRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prevoz  $prevoz
     * @return \Illuminate\Http\Response
     */
    public function show(Prevoz $prevoz)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prevoz  $prevoz
     * @return \Illuminate\Http\Response
     */
    public function edit(Prevoz $prevoz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrevozRequest  $request
     * @param  \App\Models\Prevoz  $prevoz
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrevozRequest $request, Prevoz $prevoz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prevoz  $prevoz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prevoz $prevoz)
    {
        //
    }
}
