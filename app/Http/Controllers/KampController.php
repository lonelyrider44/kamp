<?php

namespace App\Http\Controllers;

use App\Models\Kamp;
use App\Http\Requests\StoreKampRequest;
use App\Http\Requests\UpdateKampRequest;

class KampController extends Controller
{
    public function datatable()
    {
        return datatables()->of(\App\Models\Kamp::select(
            'kamps.id',
            'kamps.naziv',
            'kamps.datum_od',
            'kamps.datum_do',
            // 'kamps.cena_smene',
            \DB::raw('COUNT(ucesnik_kampas.id) as broj_ucesnika'),
            \DB::raw('COUNT(smenas.id) as broj_smena'),
            \DB::raw('COALESCE(SUM(uplatas.iznos)+ucesnik_kampas.depozit) as uplaceno')
        )
            ->leftJoin('ucesnik_kampas', 'ucesnik_kampas.kamp_id', 'kamps.id')
            ->leftJoin('smenas', 'smenas.kamp_id', 'kamps.id')
            ->leftJoin('uplatas', 'uplatas.ucesnik_kampa_id', 'ucesnik_kampas.id')
            ->groupBy(
                'kamps.id',
                'kamps.naziv',
                'kamps.datum_od',
                'kamps.datum_do',
                // 'kamps.cena_smene',
                'ucesnik_kampas.depozit'
            )
            ->toBase())
            // ->addColumn('broj_smena', '0')
            ->addColumn('action', 'kamp.partials.dt_actions')
            ->addColumn('period', 'kamp.partials.dt_period')
            ->rawColumns(['period', 'action'])
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
     * @param  \App\Http\Requests\StoreKampRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKampRequest $request)
    {
        try {
            \DB::beginTransaction();
            $kamp = \App\Models\Kamp::create($request->all());
            foreach($request->smene as $smena){
                $kamp->smene()->save(new \App\Models\Smena($smena));
            }
            // $this->store_smene($kamp, $request->broj_smena);
            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
        // return response()->json($request->all(),500);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function show(Kamp $kamp)
    {
        return $kamp;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function edit(Kamp $kamp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKampRequest  $request
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKampRequest $request, Kamp $kamp)
    {
        try {
            \DB::beginTransaction();
            $kamp->update($request->all());
            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kamp  $kamp
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kamp $kamp)
    {
        //
    }

    public function store_smene(\App\Models\Kamp $kamp, $broj_smena)
    {
        if (!empty($broj_smena)) {
            if (!empty($kamp->datum_od) && !empty($kamp->datum_do)) {
                $datum_od = \Carbon\Carbon::parse($kamp->datum_od);
                $datum_do = \Carbon\Carbon::parse($kamp->datum_do);

                $broj_dana = $datum_do->diffInDays($datum_od);
                $broj_dana_po_smeni = intdiv($broj_dana, $broj_smena);

                $datum_od_c = $datum_od->clone();
                $datum_do_c = null;
                for ($c = 1; $c <= $broj_smena; $c++) {
                    if (!empty($datum_do_c)) {
                        $datum_od_c = $datum_do_c->clone()->addDay();
                    }
                    $datum_do_c = $datum_od_c->clone()->addDays($broj_dana_po_smeni);
                    if ($c == $broj_smena && $datum_do_c > $datum_do) {
                        $datum_do_c = $datum_do;
                    }
                    \App\Models\Smena::create([
                        'kamp_id' => $kamp->id,
                        'naziv' => 'Smena ' . $this->integerToRoman($c),
                        'datum_od' => $datum_od_c,
                        'datum_do' => $datum_do_c,
                        'cena' => $kamp->cena
                    ]);
                }
                // for ($i = $datum_od; $i < $datum_do; $i->addDays($broj_dana_po_smeni)) {
                // }
            }
        }
    }

    //https://www.hashbangcode.com/article/php-function-turn-integer-roman-numerals
    public function integerToRoman($integer)
    {
        // Convert the integer into an integer (just to make sure)
        $integer = intval($integer);
        $result = '';

        // Create a lookup array that contains all of the Roman numerals.
        $lookup = array(
            'M' => 1000,
            'CM' => 900,
            'D' => 500,
            'CD' => 400,
            'C' => 100,
            'XC' => 90,
            'L' => 50,
            'XL' => 40,
            'X' => 10,
            'IX' => 9,
            'V' => 5,
            'IV' => 4,
            'I' => 1
        );

        foreach ($lookup as $roman => $value) {
            // Determine the number of matches
            $matches = intval($integer / $value);

            // Add the same number of characters to the string
            $result .= str_repeat($roman, $matches);

            // Set the integer to be the remainder of the integer and the value
            $integer = $integer % $value;
        }

        // The Roman numeral should be built, return it
        return $result;
    }
}
