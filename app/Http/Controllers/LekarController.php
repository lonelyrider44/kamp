<?php

namespace App\Http\Controllers;

use App\Models\Lekar;
use App\Http\Requests\StoreLekarRequest;
use App\Http\Requests\UpdateLekarRequest;

class LekarController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\Lekar::select('lekars.*',\DB::raw('CONCAT(prezime," ",ime) as lekar')
        )->toBase())
            ->addColumn('action','lekar.partials.dt_actions')
            ->rawColumns(['action'])
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
     * @param  \App\Http\Requests\StoreLekarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLekarRequest $request)
    {
        return $this->exec_safe(function()use($request){
            $lekar = \App\Models\Lekar::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lekar  $lekar
     * @return \Illuminate\Http\Response
     */
    public function show(Lekar $lekar)
    {
        return response()->json($lekar);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lekar  $lekar
     * @return \Illuminate\Http\Response
     */
    public function edit(Lekar $lekar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLekarRequest  $request
     * @param  \App\Models\Lekar  $lekar
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLekarRequest $request, Lekar $lekar)
    {
        return $this->exec_safe(function()use($lekar, $request){
            $lekar->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lekar  $lekar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lekar $lekar)
    {
        return $this->exec_safe(function()use($lekar){
            $lekar->delete();
        });
    }
}
