<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKampRequest extends FormRequest
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

    public function prepareForValidation(){
        // $this->merge(['smene' => collect($this->smene)->map(function($item){
        //     $item['kamp_id'] = $this->kamp_id;
        //     return $item;
        // })->all()]);
        // $nove_smene = [];
        // foreach($this->smene as $smena){
        //     if(!empty($smena->id)){
        //         $nove_smene[$smena->id] = $smena;
        //     }
        // }
        // foreach($this->smene as $smena){
        //     if(empty($smena->id)){
        //         $nove_smene[] = $smena;
        //     }
        // }
        // $this->merge(['smene' => $nove_smene]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lokacija_id' => 'required',
            'naziv' => 'required',
            // 'godina' => 'required',
            // 'datum_od' => 'required',
            // 'datum_do' => 'required',
            'broj_prijava' => 'required',
            'cena_smene_rsd' => 'required',
            'cena_smene_eur' => 'required',
            'depozit_rsd' => 'required_without:depozit_eur',
            'depozit_eur' => 'required_without:depozit_rsd'
            // 'status' => 'required',
            // 'cena' => 'required'
        ];
    }
}
