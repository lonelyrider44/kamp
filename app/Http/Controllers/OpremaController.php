<?php

namespace App\Http\Controllers;

use App\Models\Oprema;
use App\Http\Requests\StoreOpremaRequest;
use App\Http\Requests\UpdateOpremaRequest;

class OpremaController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Oprema::all())
            ->addColumn('action','oprema.partials.dt_actions')
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
    public function show(Oprema $oprema)
    {
        //
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
