<?php

namespace App\Domains\AccessControl\Policies;

use App\Domains\AccessControl\Traits\HandlesAuthorization;
use App\Domains\Player\Models\Player;
use App\Models\User;
 

class PlayerPolicy 
{
    use HandlesAuthorization;
    public function viewAny(User $user): bool
    {
        return $this->authorizePermission($user, 'player.view');
    }

    public function view(User $user, Player $player): bool
    {
        return $this->authorizePermission($user, 'player.view');
            
    }

    public function create(User $user): bool
    {
        return $this->authorizePermission($user, 'player.create');
    }

    public function update(User $user, Player $player): bool
    {
        return $this->authorizePermission($user, 'player.update');
        
    }

    public function delete(User $user, Player $player): bool
    {
        return $this->authorizePermission($user, 'player.delete');
           
    }

    public function restore(User $user, Player $player): bool
    {
        return $this->authorizePermission($user, 'player.restore');
            
    }

    public function forceDelete(User $user, Player $player): bool
    {
        return $this->authorizePermission($user, 'player.force-delete');
           
    }
}