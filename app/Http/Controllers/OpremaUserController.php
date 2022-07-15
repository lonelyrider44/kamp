<?php

namespace App\Http\Controllers;

use App\Models\OpremaUser;
use App\Http\Requests\StoreOpremaUserRequest;
use App\Http\Requests\UpdateOpremaUserRequest;

class OpremaUserController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\OpremaUser::select('oprema_users.*',\DB::raw('CONCAT(prezime," ",ime) as korisnik')
        )->toBase())
            ->addColumn('action','oprema_users.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreOpremaUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOpremaUserRequest $request)
    {
        return $this->exec_safe(function()use($request){
            $oprema_user = \App\Models\OpremaUser::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OpremaUser  $opremaUser
     * @return \Illuminate\Http\Response
     */
    public function show(OpremaUser $opremaUser)
    {
        return response()->json($opremaUser);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OpremaUser  $opremaUser
     * @return \Illuminate\Http\Response
     */
    public function edit(OpremaUser $opremaUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOpremaUserRequest  $request
     * @param  \App\Models\OpremaUser  $opremaUser
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOpremaUserRequest $request, OpremaUser $opremaUser)
    {
        return $this->exec_safe(function()use($request,$opremaUser){
            $opremaUser->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OpremaUser  $opremaUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(OpremaUser $opremaUser)
    {
        return $this->exec_safe(function()use($opremaUser){
            $opremaUser->delete();
        });
    }
}
