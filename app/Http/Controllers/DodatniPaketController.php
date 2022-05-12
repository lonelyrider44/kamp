<?php

namespace App\Http\Controllers;

use App\Models\DodatniPaket;
use App\Http\Requests\StoreDodatniPaketRequest;
use App\Http\Requests\UpdateDodatniPaketRequest;

class DodatniPaketController extends Controller
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
     * @param  \App\Http\Requests\StoreDodatniPaketRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDodatniPaketRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function show(DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function edit(DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDodatniPaketRequest  $request
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDodatniPaketRequest $request, DodatniPaket $dodatniPaket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DodatniPaket  $dodatniPaket
     * @return \Illuminate\Http\Response
     */
    public function destroy(DodatniPaket $dodatniPaket)
    {
        //
    }
}
