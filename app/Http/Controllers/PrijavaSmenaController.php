<?php

namespace App\Http\Controllers;

use App\Models\PrijavaSmena;
use App\Http\Requests\StorePrijavaSmenaRequest;
use App\Http\Requests\UpdatePrijavaSmenaRequest;

class PrijavaSmenaController extends Controller
{
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
     * @param  \App\Http\Requests\StorePrijavaSmenaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrijavaSmenaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrijavaSmena  $prijavaSmena
     * @return \Illuminate\Http\Response
     */
    public function show(PrijavaSmena $prijavaSmena)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrijavaSmena  $prijavaSmena
     * @return \Illuminate\Http\Response
     */
    public function edit(PrijavaSmena $prijavaSmena)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrijavaSmenaRequest  $request
     * @param  \App\Models\PrijavaSmena  $prijavaSmena
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrijavaSmenaRequest $request, PrijavaSmena $prijavaSmena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrijavaSmena  $prijavaSmena
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrijavaSmena $prijavaSmena)
    {
        //
    }
}
