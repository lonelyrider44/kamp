<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePrijavaRequest extends FormRequest
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
            })
            ->map(function($item){
                $item['status_id'] = 1;
                return $item;
            })
            ->pluck('status_id','id')->all(),
            'dodatni_paketi' => collect($this->dodatni_paketi)->filter(function ($item) {
                return $item['izabran'] == true;
            })->pluck('id')->all(),
            // 'roditelj_sifra' => 'bscadmin#123',
            // 'tip_prevoza_id' => $this->prevoz,
            // 'status_id' => 1,
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
            //
        ];
    }
}
