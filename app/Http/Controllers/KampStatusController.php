<?php

namespace App\Http\Controllers;

use App\Models\KampStatus;
use App\Http\Requests\StoreKampStatusRequest;
use App\Http\Requests\UpdateKampStatusRequest;

class KampStatusController extends Controller
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
     * @param  \App\Http\Requests\StoreKampStatusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKampStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KampStatus  $kampStatus
     * @return \Illuminate\Http\Response
     */
    public function show(KampStatus $kampStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KampStatus  $kampStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(KampStatus $kampStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKampStatusRequest  $request
     * @param  \App\Models\KampStatus  $kampStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKampStatusRequest $request, KampStatus $kampStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KampStatus  $kampStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(KampStatus $kampStatus)
    {
        //
    }
}
