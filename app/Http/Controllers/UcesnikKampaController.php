<?php

namespace App\Http\Controllers;

use App\Models\UcesnikKampa;
use App\Http\Requests\StoreUcesnikKampaRequest;
use App\Http\Requests\UpdateUcesnikKampaRequest;

class UcesnikKampaController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\UcesnikKampa::all())
            ->addColumn('action','kamp.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreUcesnikKampaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUcesnikKampaRequest $request)
    {
        try{
            \DB::beginTransaction();
            \App\Models\UcesnikKampa::create($request->all());
            \DB::commit();
        }catch(\Exception $e){
            \DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UcesnikKampa  $ucesnikKampa
     * @return \Illuminate\Http\Response
     */
    public function show(UcesnikKampa $ucesnikKampa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UcesnikKampa  $ucesnikKampa
     * @return \Illuminate\Http\Response
     */
    public function edit(UcesnikKampa $ucesnikKampa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUcesnikKampaRequest  $request
     * @param  \App\Models\UcesnikKampa  $ucesnikKampa
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUcesnikKampaRequest $request, UcesnikKampa $ucesnikKampa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UcesnikKampa  $ucesnikKampa
     * @return \Illuminate\Http\Response
     */
    public function destroy(UcesnikKampa $ucesnikKampa)
    {
        //
    }
}
