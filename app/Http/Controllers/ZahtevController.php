<?php

namespace App\Http\Controllers;

use App\Models\Zahtev;
use App\Http\Requests\StoreZahtevRequest;
use App\Http\Requests\UpdateZahtevRequest;

class ZahtevController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
    {
        return datatables()->of(\App\Models\Zahtev::select(
            'zahtevs.*',
            'roditeljs.ime as ime_r',
            'roditeljs.prezime as prezime_r',
            'roditeljs.email as email_r',
            'roditeljs.telefon as telefon_r',
            'ucesniks.ime',
            'ucesniks.prezime',
            'ucesniks.email',
            'ucesniks.telefon',
            'status_zahtevas.naziv as status_zahteva'
        )
            ->join('status_zahtevas', 'status_zahtevas.id', 'zahtevs.status_id')
            ->join('roditeljs', 'roditeljs.id', 'zahtevs.roditelj_id')
            ->leftJoin('ucesniks', 'ucesniks.id', 'zahtevs.ucesnik_id'))
            ->addColumn('roditelj', 'zahtev.partials.dt_roditelj')
            ->addColumn('ucesnik', 'zahtev.partials.dt_ucesnik')
            ->addColumn('action', 'zahtev.partials.dt_actions')
            ->rawColumns(['roditelj', 'ucesnik', 'action'])
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
     * @param  \App\Http\Requests\StoreZahtevRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreZahtevRequest $request)
    {
        return $this->exec_safe(function () use ($request) {
            \App\Models\Zahtev::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Zahtev  $zahtev
     * @return \Illuminate\Http\Response
     */
    public function show(Zahtev $zahtev)
    {
        $zahtev->load(['roditelj','ucesnik','kamp','smena','status_zahteva']);
        return response()->json($zahtev->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Zahtev  $zahtev
     * @return \Illuminate\Http\Response
     */
    public function edit(Zahtev $zahtev)
    {
        return response()->json($zahtev);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateZahtevRequest  $request
     * @param  \App\Models\Zahtev  $zahtev
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateZahtevRequest $request, Zahtev $zahtev)
    {
        $this->exec_safe(function () use ($request, $zahtev) {
            $zahtev->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Zahtev  $zahtev
     * @return \Illuminate\Http\Response
     */
    public function destroy(Zahtev $zahtev)
    {
        $this->exec_safe(function () use ($zahtev) {
            $zahtev->delete();
        });
    }

    public function statusi(){
        return response()->json(\App\Models\StatusZahteva::all());
        // return $this->exec_safe(function(){
        // });
    }
    public function odgovor(\Illuminate\Http\Request $request, \App\Models\Zahtev $zahtev){
        return $this->exec_safe(function()use($request, $zahtev){
            $zahtev->update($request->all());
        });
    }
}
