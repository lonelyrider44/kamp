<?php

namespace App\Http\Controllers;

use App\Models\Kamp;
use App\Http\Requests\StoreKampRequest;
use App\Http\Requests\UpdateKampRequest;

class KampController extends Controller
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
     * @param  \App\Http\Requests\StoreKampRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKampRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function show(Kamp $kamp)
    {
        //
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
    public function update(UpdateKampRequest $request, Kamp $kamp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kamp $kamp)
    {
        //
    }
}
