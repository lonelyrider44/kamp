<?php

namespace App\Http\Controllers;

use App\Models\Mesto;
use App\Http\Requests\StoreMestoRequest;
use App\Http\Requests\UpdateMestoRequest;

class MestoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \App\Models\Mesto::all();
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
     * @param  \App\Http\Requests\StoreMestoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMestoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mesto  $mesto
     * @return \Illuminate\Http\Response
     */
    public function show(Mesto $mesto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mesto  $mesto
     * @return \Illuminate\Http\Response
     */
    public function edit(Mesto $mesto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMestoRequest  $request
     * @param  \App\Models\Mesto  $mesto
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMestoRequest $request, Mesto $mesto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mesto  $mesto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mesto $mesto)
    {
        //
    }
}
