<?php

namespace App\Domains\Category\Models;

use App\Domains\Tournament\Models\Tournament;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Category extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable=['name' , '', ];

    protected $guarded = [];

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    public function tournaments()
    {
        return $this->hasMany(
           Tournament::class
        );
    }
}