<?php

namespace App\Http\Controllers;

use App\Models\Fizioterapeut;
use App\Http\Requests\StoreFizioterapeutRequest;
use App\Http\Requests\UpdateFizioterapeutRequest;

class FizioterapeutController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Fizioterapeut::select('fizioterapeuts.*',\DB::raw('CONCAT(prezime," ",ime) as fizioterapeut')
        )->toBase())
            ->addColumn('action','fizioterapeut.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreFizioterapeutRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFizioterapeutRequest $request)
    {
        return $this->exec_safe(function()use($request){
            $fizioterapeut = \App\Models\Fizioterapeut::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Fizioterapeut  $fizioterapeut
     * @return \Illuminate\Http\Response
     */
    public function show(Fizioterapeut $fizioterapeut)
    {
        return response()->json($fizioterapeut);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Fizioterapeut  $fizioterapeut
     * @return \Illuminate\Http\Response
     */
    public function edit(Fizioterapeut $fizioterapeut)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFizioterapeutRequest  $request
     * @param  \App\Models\Fizioterapeut  $fizioterapeut
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFizioterapeutRequest $request, Fizioterapeut $fizioterapeut)
    {
        return $this->exec_safe(function()use($request, $fizioterapeut){
            $fizioterapeut->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fizioterapeut  $fizioterapeut
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fizioterapeut $fizioterapeut)
    {
        return $this->exec_safe(function()use($fizioterapeut){
            $fizioterapeut->delete();
        });
    }
}
