<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class PrijavaSmenaUnique implements Rule, DataAwareRule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
     /**
     * All of the data under validation.
     *
     * @var array
     */
    protected $data = [];
 
    // ...
 
    /**
     * Set the data under validation.
     *
     * @param  array  $data
     * @return $this
     */
    public function setData($data)
    {
        $this->data = $data;
 
        return $this;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return \DB::table('prijavas')
            ->join('prijava_smenas', 'prijava_smenas.prijava_id','prijavas.id')
            ->where('email',$this->data['email'])->get()->filter(function($item){
                return in_array($item->smena_id, $this->data['smene']);
            })->count() == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Postoji prijava sa ovom email adresom za izabrane smene';
    }
}
