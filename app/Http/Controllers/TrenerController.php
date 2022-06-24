<?php

namespace App\Http\Controllers;

use App\Models\Trener;
use App\Http\Requests\StoreTrenerRequest;
use App\Http\Requests\UpdateTrenerRequest;

class TrenerController extends Controller
{
    public function datatable()
    {
        return datatables()->of(\App\Models\Trener::select('treners.*',\DB::raw('CONCAT(prezime," ",ime) as trener'))->toBase())
            ->addColumn('action', 'trener.partials.dt_actions')
            ->make(true);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \App\Models\Trener::all();
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
     * @param  \App\Http\Requests\StoreTrenerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTrenerRequest $request)
    {
        $this->exec_safe(function () use ($request) {
            $trener = \App\Models\Trener::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Trener  $trener
     * @return \Illuminate\Http\Response
     */
    public function show(Trener $trener)
    {
        return response()->json($trener);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Trener  $trener
     * @return \Illuminate\Http\Response
     */
    public function edit(Trener $trener)
    {
        return response()->json($trener);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTrenerRequest  $request
     * @param  \App\Models\Trener  $trener
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTrenerRequest $request, Trener $trener)
    {
        $this->exec_safe(function () use ($request, $trener) {
            $trener->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Trener  $trener
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trener $trener)
    {
        $this->exec_safe(function () use ($trener) {
            $trener->delete();
        });
    }

    
}
