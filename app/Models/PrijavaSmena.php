<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaSmena extends Model
{
    use HasFactory;

    protected $fillable = ['smena_id','status_id','prijava_id'];
}
