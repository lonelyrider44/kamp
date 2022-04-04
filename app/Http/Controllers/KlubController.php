<?php

namespace App\Http\Controllers;

use App\Models\Klub;
use App\Http\Requests\StoreKlubRequest;
use App\Http\Requests\UpdateKlubRequest;

class KlubController extends Controller
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
     * @param  \App\Http\Requests\StoreKlubRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKlubRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Klub  $klub
     * @return \Illuminate\Http\Response
     */
    public function show(Klub $klub)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Klub  $klub
     * @return \Illuminate\Http\Response
     */
    public function edit(Klub $klub)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKlubRequest  $request
     * @param  \App\Models\Klub  $klub
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKlubRequest $request, Klub $klub)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Klub  $klub
     * @return \Illuminate\Http\Response
     */
    public function destroy(Klub $klub)
    {
        //
    }
}
