<?php 
namespace App\Domains\Media\Models;
use App\Domains\Media\Models\Media;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Mediable extends Model
{
    use HasUuids;

    protected $fillable = [
        'media_id',
        'mediable_type',
        'mediable_id',
        'collection',
        'sort_order',
    ];

    public function media()
    {
        return $this->belongsTo(Media::class);
    }

    public function mediable()
    {
        return $this->morphTo();
    }
}