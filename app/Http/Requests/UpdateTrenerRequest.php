<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTrenerRequest extends FormRequest
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
            'prezime' => 'required',
            'ime' => 'required',
            'email' => 'required',
            'telefon' => 'required',
            'password' => 'nullable|confirmed',
            'majica' => 'required',
            'sorc' => 'required',
            'duks' => 'required',
            'trenerka' => 'required',
            'koordinator' => 'required'
        ];
    }
}
