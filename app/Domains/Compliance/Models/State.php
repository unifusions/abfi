<?php

namespace App\Domains\Compliance\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'short_code', 'region'])]
class State extends Model
{
    
}
