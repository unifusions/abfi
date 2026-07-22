<?php

namespace App\Domains\Player\Queries;

use App\Domains\Player\Models\Player;
use App\Domains\Shared\Queries\BaseQuery;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PlayerQuery extends BaseQuery
{
    protected function model(): string
    {
        return Player::class;
    }

    public function paginate(
        ?string $search,
        ?string $organization,
        int $perPage = 15
    ): LengthAwarePaginator {

        return $this->search($search)
            ->query(function ($query) use ($organization) {

                if ($organization) {
                    $query->where('organization_id', $organization);
                }

                $query->orderByDesc('created_at');
            })
            ->paginate($perPage);
    }

    public function find(string $id): Player
    {
        return Player::query()
            ->whereKey($id)
            ->when(
                ! $this->user->isSuperAdmin() &&
                ! $this->user->hasRole('federation.admin'),
                fn ($q) => $q->where(
                    'organization_id',
                    $this->user->organization_id
                )
            )
            ->firstOrFail();
    }
}