<?php

namespace App\Http\Controllers;

use App\Models\Velicina;
use App\Http\Requests\StoreVelicinaRequest;
use App\Http\Requests\UpdateVelicinaRequest;

class VelicinaController extends Controller
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
     * @param  \App\Http\Requests\StoreVelicinaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVelicinaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Velicina  $velicina
     * @return \Illuminate\Http\Response
     */
    public function show(Velicina $velicina)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Velicina  $velicina
     * @return \Illuminate\Http\Response
     */
    public function edit(Velicina $velicina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVelicinaRequest  $request
     * @param  \App\Models\Velicina  $velicina
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVelicinaRequest $request, Velicina $velicina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Velicina  $velicina
     * @return \Illuminate\Http\Response
     */
    public function destroy(Velicina $velicina)
    {
        //
    }
}
