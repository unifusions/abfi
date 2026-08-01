<?php

namespace App\Domains\Tournament\Roster\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RosterOfficialResource extends JsonResource
{
    public function toArray($request)
    {
        $official = $this->official;
        return [
            'id' => $this->id,
            'official_id' => $official?->id,
            'name' => implode(' ', [$official?->first_name, $official?->middle_name, $official?->last_name]),
            'type' => ucfirst($official->type) . ' Official',
            'code' => $official->official_code
        ];
    }
}