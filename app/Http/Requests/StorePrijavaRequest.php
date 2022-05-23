<?php

namespace App\Http\Requests;

use App\Rules\PrijavaSmenaUnique;
use Illuminate\Foundation\Http\FormRequest;

class StorePrijavaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    public function prepareForValidation()
    {
        $this->merge([
            'smene' => collect($this->smene)->filter(function ($item) {
                return $item['izabrana'] == true;
            })->pluck('id')->all(),
            'dodatni_paketi' => collect($this->dodatni_paketi)->filter(function ($item) {
                return $item['izabran'] == true;
            })->pluck('id')->all(),
            'roditelj_sifra' => 'bscadmin#123'
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'kamp_id' => 'required',
            // 'ucesnik_id' => 'required',

            'ime_roditelja' => 'required',
            'prezime_roditelja' => 'required',
            'email_roditelja' => 'required',
            'telefon_roditelja' => 'required',

            'ime' => 'required',
            'prezime' => 'required',
            'email' => ['nullable', new PrijavaSmenaUnique],
            'telefon' => 'nullable',

            'pol_id' => 'required',
            'datum_rodjenja' => 'required',
            'jmbg_pasos' => 'required',

            'adresa' => 'required',
            'mesto' => 'required',
            'drzava' => 'required',

            'visina' => 'required',
            'tezina' => 'required',

            'alergije' => 'required',
            'zdravstveni_problem' => 'required',

            'majica' => 'required',
            'sorc' => 'required',
            'duks' => 'required',
            'trenerka' => 'required',

            'napomena_smestaj' => 'nullable',
            'napomena_hrana' => 'nullable',
            'napomena_alergije' => 'required_if:alergije,"true"',
            'napomena_zdravstveni_problemi' => 'required_if:zdravstveni_problem,"true"',

            'prevoz' => 'required',
            'organizovani_prevoz' => 'required_if:prevoz,1',

            'saglasnost_politika_privatnosti' => 'required|boolean|size:1',
            'saglasnost_obrada_podataka' => 'required|boolean|size:1',
            'saglasnost_ucesce_na_kampu' => 'required|boolean|size:1',
            'saglasnost_donatorski_ugovor' => 'required|boolean|size:1',
            'saglasnost_pravila_kampa' => 'required|boolean|size:1',

            'depozit_rsd' => 'nullable',
            'depozit_eur' => 'nullable',
        ];
    }
}
