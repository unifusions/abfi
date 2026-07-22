<?php

namespace App\Domains\AccessControl\Contracts;

use App\Models\User;

class ScopeContext
{
    public function __construct(
        protected readonly User $user,
        protected readonly array $attributes = [],
    ) {}

    public static function make(User $user, array $attributes = []): self
    {
        return new self($user, $attributes);
    }

    public function user(): User
    {
        return $this->user;
    }

    public function organizationId(): ?string
    {
        return $this->user->organization_id;
    }

    public function isSuperAdmin(): bool
    {
        return $this->user->isSuperAdmin();
    }

    public function hasRole(string|array $roles): bool
    {
        return $this->user->hasRole($roles);
    }

    public function hasPermission(string|array $permissions): bool
    {
        return $this->user->hasPermission($permissions);
    }

    public function get(string $key, mixed $default = null): mixed
    {
        return data_get($this->attributes, $key, $default);
    }

    public function all(): array
    {
        return $this->attributes;
    }
}