<?php

namespace App\Domains\User\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserListResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'organization' => $this->organization?->name,
            'roles' => $this->roles()->pluck('name')
        ];
    }
}