<?php

use App\Domains\Compliance\Models\BaseballPosition;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([''])]
class Player extends Model
{
    use HasFactory;

 
    public function positions()
{
    return $this->belongsToMany(
        BaseballPosition::class,
        'player_positions'
    );
}

}

