<?php

namespace App\Http\Controllers;

use App\Models\PrijavaPaketi;
use App\Http\Requests\StorePrijavaPaketiRequest;
use App\Http\Requests\UpdatePrijavaPaketiRequest;

class PrijavaPaketiController extends Controller
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
     * @param  \App\Http\Requests\StorePrijavaPaketiRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrijavaPaketiRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrijavaPaketi  $prijavaPaketi
     * @return \Illuminate\Http\Response
     */
    public function show(PrijavaPaketi $prijavaPaketi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrijavaPaketi  $prijavaPaketi
     * @return \Illuminate\Http\Response
     */
    public function edit(PrijavaPaketi $prijavaPaketi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrijavaPaketiRequest  $request
     * @param  \App\Models\PrijavaPaketi  $prijavaPaketi
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrijavaPaketiRequest $request, PrijavaPaketi $prijavaPaketi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrijavaPaketi  $prijavaPaketi
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrijavaPaketi $prijavaPaketi)
    {
        //
    }
}
