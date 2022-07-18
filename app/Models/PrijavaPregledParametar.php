<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaPregledParametar extends Model
{
    use HasFactory;

    protected $fillable = ['naziv', 'vrednost'];
}
