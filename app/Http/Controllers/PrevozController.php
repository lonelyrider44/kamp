<?php

namespace App\Http\Controllers;

use App\Models\Prevoz;
use App\Http\Requests\StorePrevozRequest;
use App\Http\Requests\UpdatePrevozRequest;

class PrevozController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Prevoz::all())
            ->addColumn('action','prevoz.partials.dt_actions')
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
