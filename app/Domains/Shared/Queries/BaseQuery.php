<?php

namespace App\Domains\Shared\Queries;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Builder as ScoutBuilder;

abstract class BaseQuery
{
    public function __construct(
        protected readonly User $user,
    ) {}

    abstract protected function model(): string;

    protected function search(?string $search = null): ScoutBuilder
    {
        return $this->model()::search($search ?? '')
            ->query(function (Builder $query) {
                $this->applyScope($query);
            });
    }

    protected function applyScope(Builder $query): void
    {
        if ($this->user->isSuperAdmin()) {
            return;
        }

        if ($this->user->hasRole('federation.admin')) {
            return;
        }

        $query->where(
            $query->getModel()->qualifyColumn('organization_id'),
            $this->user->organization_id
        );
    }
}