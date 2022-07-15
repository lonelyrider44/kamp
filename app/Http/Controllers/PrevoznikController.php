<?php

namespace App\Http\Controllers;

use App\Models\Prevoznik;
use App\Http\Requests\StorePrevoznikRequest;
use App\Http\Requests\UpdatePrevoznikRequest;

class PrevoznikController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Prevoznik::select('prevozniks.*',\DB::raw('CONCAT(prezime," ",ime) as prevoznik')
        )->toBase())
            ->addColumn('action','prevoznik.partials.dt_actions')
            ->rawColumns(['action'])
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
     * @param  \App\Http\Requests\StorePrevoznikRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrevoznikRequest $request)
    {
        return $this->exec_safe(function()use($request){
            $prevoznik = \App\Models\Prevoznik::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prevoznik  $prevoznik
     * @return \Illuminate\Http\Response
     */
    public function show(Prevoznik $prevoznik)
    {
        return response()->json($prevoznik);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prevoznik  $prevoznik
     * @return \Illuminate\Http\Response
     */
    public function edit(Prevoznik $prevoznik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrevoznikRequest  $request
     * @param  \App\Models\Prevoznik  $prevoznik
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrevoznikRequest $request, Prevoznik $prevoznik)
    {
        return $this->exec_safe(function()use($request, $prevoznik){
            $prevoznik->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prevoznik  $prevoznik
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prevoznik $prevoznik)
    {
        return $this->exec_safe(function()use($prevoznik){
            $prevoznik->delete();
        });
    }
}
