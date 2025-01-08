<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Devi extends Model
{
    protected $fillable = [
        "name",
        "email",
        "tel",
        "adresse",
        "title",
        "description"
    ];
}
