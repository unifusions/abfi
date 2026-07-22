<?php 

namespace   App\Domains\Compliance\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'last_number'])]
class CodeSequence extends Model{

}