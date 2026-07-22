<?php

namespace App\Domains\Shared\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'label' => $this->name,
            'value' => $this->id,
            'competition_type' => $this->maximum_age > 18 ? [
                ['value' => 'men', 'label' => 'Men'],
                ['value' => 'women', 'label' => 'Women'],
            ] : [
                ['value' => 'boys', 'label' => 'Boys'],
                ['value' => 'girls', 'label' => 'Girls'],
            ]
        ];
    }
}