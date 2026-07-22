<?php
namespace App\Domains\Media\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Mediable;
class Media extends Model
{
    use HasUuids;

    protected $fillable = [
        'disk',
        'path',
        'file_name',
        'mime_type',
        'extension',
        'size',
        'width',
        'height',
        'created_by',
    ];

    public function mediables()
    {
        return $this->hasMany(Mediable::class);
    }
}