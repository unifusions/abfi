<?php

namespace App\Domains\Tournament\Roster\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RosterListResource extends JsonResource
{
    public function toArray($request)
    {
        $action = $this->actionFor($request->user());

        return [
            'id' => $this->id,
            'name' => $this->name,
            'association' => $this->organization->name,
            'competition' => $this->competition->name,
            'tournament' => $this->competition->tournament->name,
            'division' => $this->competition->tournament->category->name,
            'max_players' => $this->competition->tournament->category->maximum_players,
            'state' => $this->organization->state?->short_code,
            'roster_players' => $this->players->count(),
            'status' => [
                'value' => $this->status->value,
                'label' => $this->status->label(),
            ],

            'action' => [
                'value' => $action->value,
                'label' => $action->label(),
                'route' => route($action->route(), $this->resource),
            ],
        ];
    }
}