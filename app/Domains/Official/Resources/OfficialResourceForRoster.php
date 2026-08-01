<?php

namespace App\Domains\Official\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OfficialResourceForRoster extends JsonResource
{
    public function toArray($request): array
    {;
        return [
            'id' => $this->id,
            'official_code' => $this->code,
            'name' => implode(', ', [$this->first_name, $this->middle_name, $this->last_name]),
            'type' => ucfirst($this->type) . ' Official'
        ];
    }
}
