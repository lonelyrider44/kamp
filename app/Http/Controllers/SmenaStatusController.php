<?php

namespace App\Http\Controllers;

use App\Models\SmenaStatus;
use App\Http\Requests\StoreSmenaStatusRequest;
use App\Http\Requests\UpdateSmenaStatusRequest;

class SmenaStatusController extends Controller
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
     * @param  \App\Http\Requests\StoreSmenaStatusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSmenaStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SmenaStatus  $smenaStatus
     * @return \Illuminate\Http\Response
     */
    public function show(SmenaStatus $smenaStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SmenaStatus  $smenaStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(SmenaStatus $smenaStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSmenaStatusRequest  $request
     * @param  \App\Models\SmenaStatus  $smenaStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSmenaStatusRequest $request, SmenaStatus $smenaStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SmenaStatus  $smenaStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(SmenaStatus $smenaStatus)
    {
        //
    }
}
