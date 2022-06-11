<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUplataRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'kamp_id' => 'required',
            'smena_id' => 'nullable',
            'ucesnik_id' => 'required',
            'datum_uplate' => 'required',
            'iznos_rsd' => 'required_without:iznos_eur',
            'iznos_eur' => 'required_without:iznos_rsd',
        ];
    }
}
