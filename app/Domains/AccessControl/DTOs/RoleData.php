<?php 

namespace App\Domains\AccessControl\DTOs;

use App\Domains\AccessControl\Requests\StoreRoleRequest;
use App\Domains\AccessControl\Requests\UpdateRoleRequest;

final readonly class RoleData{
    public function __construct(
         public string $code,
        public string $name,
        public ?string $description,
        public bool $isSystem,
        public array $permissions, 
    ){}

     public static function fromStoreRequest(StoreRoleRequest $request): self
    {
        return new self(
            code: $request->string('code')->toString(),
            name: $request->string('name')->toString(),
            description: $request->input('description'),
            isSystem: (bool) $request->boolean('is_system'),
            permissions: $request->input('permissions', []),
        );
    }

     public static function fromUpdateRequest(UpdateRoleRequest $request): self
    {
        return new self(
            code: $request->string('code')->toString(),
            name: $request->string('name')->toString(),
            description: $request->input('description'),
            isSystem: (bool) $request->boolean('is_system'),
            permissions: $request->input('permissions', []),
        );
    }

}