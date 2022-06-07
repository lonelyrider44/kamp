<?php

namespace App\Http\Controllers;

use App\Models\Roditelj;
use App\Http\Requests\StoreRoditeljRequest;
use App\Http\Requests\UpdateRoditeljRequest;

class RoditeljController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request){
        return datatables()->of(\App\Models\Roditelj::select(
            'roditeljs.*',
            \DB::raw('COUNT(ucesniks.id) as broj_ucesnika')
            )->leftJoin('ucesniks','ucesniks.roditelj_id','roditeljs.id')
            ->groupBy('roditeljs.id'))
            ->make(true);
    }
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
     * @param  \App\Http\Requests\StoreRoditeljRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRoditeljRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return \Illuminate\Http\Response
     */
    public function show(Roditelj $roditelj)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return \Illuminate\Http\Response
     */
    public function edit(Roditelj $roditelj)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRoditeljRequest  $request
     * @param  \App\Models\Roditelj  $roditelj
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRoditeljRequest $request, Roditelj $roditelj)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Roditelj  $roditelj
     * @return \Illuminate\Http\Response
     */
    public function destroy(Roditelj $roditelj)
    {
        //
    }
}
