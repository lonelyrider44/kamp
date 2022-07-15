<?php

namespace App\Http\Controllers;

use App\Models\HotelUser;
use App\Http\Requests\StoreHotelUserRequest;
use App\Http\Requests\UpdateHotelUserRequest;

class HotelUserController extends Controller
{
    public function datatable(){
        return datatables()->of(\App\Models\HotelUser::select('hotel_users.*',\DB::raw('CONCAT(prezime," ",ime) as korisnik')
        )->toBase())
            ->addColumn('action','hotel_user.partials.dt_actions')
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
     * @param  \App\Http\Requests\StoreHotelUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHotelUserRequest $request)
    {
        return $this->exec_safe(function()use($request){
            $hotel_user = \App\Models\HotelUser::create($request->all());
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HotelUser  $hotelUser
     * @return \Illuminate\Http\Response
     */
    public function show(HotelUser $hotelUser)
    {
        return response()->json($hotelUser);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HotelUser  $hotelUser
     * @return \Illuminate\Http\Response
     */
    public function edit(HotelUser $hotelUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHotelUserRequest  $request
     * @param  \App\Models\HotelUser  $hotelUser
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHotelUserRequest $request, HotelUser $hotelUser)
    {
        return $this->exec_safe(function()use($request, $hotelUser){
            $hotelUser->update($request->all());
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HotelUser  $hotelUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(HotelUser $hotelUser)
    {
        return $this->exec_safe(function()use($hotelUser){
            $hotelUser->delete();
        });
    }
}
