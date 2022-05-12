<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizovaniPrevoz extends Model
{
    use HasFactory;

    protected $fillable = ['kamp_id','naziv', 'cena_rsd','cena_eur'];
}
