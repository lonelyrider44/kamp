<?php

namespace App\Http\Controllers;

use App\Models\PrijavaStatus;
use App\Http\Requests\StorePrijavaStatusRequest;
use App\Http\Requests\UpdatePrijavaStatusRequest;

class PrijavaStatusController extends Controller
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
     * @param  \App\Http\Requests\StorePrijavaStatusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrijavaStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrijavaStatus  $prijavaStatus
     * @return \Illuminate\Http\Response
     */
    public function show(PrijavaStatus $prijavaStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrijavaStatus  $prijavaStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(PrijavaStatus $prijavaStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrijavaStatusRequest  $request
     * @param  \App\Models\PrijavaStatus  $prijavaStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrijavaStatusRequest $request, PrijavaStatus $prijavaStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrijavaStatus  $prijavaStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrijavaStatus $prijavaStatus)
    {
        //
    }
}
