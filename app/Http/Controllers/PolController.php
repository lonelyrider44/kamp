<?php

namespace App\Http\Controllers;

use App\Models\Pol;
use App\Http\Requests\StorePolRequest;
use App\Http\Requests\UpdatePolRequest;

class PolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(\App\Models\Pol::toBase()->get());
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
     * @param  \App\Http\Requests\StorePolRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePolRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pol  $pol
     * @return \Illuminate\Http\Response
     */
    public function show(Pol $pol)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pol  $pol
     * @return \Illuminate\Http\Response
     */
    public function edit(Pol $pol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePolRequest  $request
     * @param  \App\Models\Pol  $pol
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePolRequest $request, Pol $pol)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pol  $pol
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pol $pol)
    {
        //
    }
}
