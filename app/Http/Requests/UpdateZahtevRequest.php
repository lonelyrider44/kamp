<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateZahtevRequest extends FormRequest
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
            'zahtev' => 'required',
            'odgovor' => 'nullable',
            'kamp_id' => 'required',
            'smena_id' => 'nullable',
            'roditelj_id' => 'required',
            'ucesnik_id' => 'nullable',
            'status_id' => 'required'
        ];
    }
}
