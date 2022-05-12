<?php

namespace App\Http\Controllers;

use App\Models\PrijavaSmene;
use App\Http\Requests\StorePrijavaSmeneRequest;
use App\Http\Requests\UpdatePrijavaSmeneRequest;

class PrijavaSmeneController extends Controller
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
     * @param  \App\Http\Requests\StorePrijavaSmeneRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrijavaSmeneRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrijavaSmene  $prijavaSmene
     * @return \Illuminate\Http\Response
     */
    public function show(PrijavaSmene $prijavaSmene)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrijavaSmene  $prijavaSmene
     * @return \Illuminate\Http\Response
     */
    public function edit(PrijavaSmene $prijavaSmene)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrijavaSmeneRequest  $request
     * @param  \App\Models\PrijavaSmene  $prijavaSmene
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrijavaSmeneRequest $request, PrijavaSmene $prijavaSmene)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrijavaSmene  $prijavaSmene
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrijavaSmene $prijavaSmene)
    {
        //
    }
}
