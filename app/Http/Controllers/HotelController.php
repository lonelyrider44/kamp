<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Http\Requests\StoreHotelRequest;
use App\Http\Requests\UpdateHotelRequest;

class HotelController extends Controller
{
    public function datatable(\Illuminate\Http\Request $request)
    {
        return datatables()->of(
            // \App\Models\Hotel::all()
            \App\Models\Prijava::select(
                'prijavas.id',
                'ucesniks.ime',
                'ucesniks.prezime',
                'ucesniks.email',
                'ucesniks.telefon',
                'roditeljs.ime as ime_r',
                'roditeljs.prezime as prezime_r',
                'roditeljs.email as email_r',
                'roditeljs.telefon as telefon_r',
                'sopstveni_smestaj',
                'napomena_smestaj',
                'broj_sobe'
            )
                ->join('roditeljs', 'roditeljs.id', 'prijavas.roditelj_id')
                ->join('ucesniks', 'ucesniks.id', 'prijavas.ucesnik_id')
                ->when(!empty($request->kamp_id), function($query)use($request){
                    return $query->where('prijavas.kamp_id', $request->kamp_id);
                })
                ->when(!empty($request->smena_id), function ($query) use ($request) {
                    $query->whereIn('prijavas.id', function ($query) use ($request) {
                        $query->select('prijava_smenas.prijava_id')
                            ->from('prijava_smenas')
                            ->where('prijava_smenas.smena_id', $request->smena_id);
                    });
                })
                ->when(empty($request->kamp_id)&&empty($request->smena_id), function($query){
                    return $query->where('prijavas.kamp_id', -1);
                })
                ->toBase()
        )
            ->addColumn('ucesnik', 'hotel.partials.dt_ucesnik')
            ->addColumn('roditelj', 'hotel.partials.dt_roditelj')
            ->addColumn('action', 'hotel.partials.dt_actions')
            ->rawColumns(['ucesnik', 'roditelj', 'action'])
            ->make(true);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { }

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
     * @param  \App\Http\Requests\StoreHotelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHotelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(Hotel $hotel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Hotel $hotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHotelRequest  $request
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHotelRequest $request, Hotel $hotel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        //
    }
}
