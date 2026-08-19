<?php

namespace App\Domains\Player\Services;

use App\Domains\AccessControl\Enums\RoleEnum;
use App\Domains\Player\Actions\CreatePlayer;
use App\Domains\Player\Actions\GeneratePlayerCode;
use App\Domains\Player\Actions\UpdatePlayer;
use App\Domains\Player\Models\Player;
use App\Models\User;
use DB;

class PlayerService
{
    public function __construct(
        protected CreatePlayer $createPlayer,
        protected UpdatePlayer $updatePlayer,
        protected GeneratePlayerCode $generatePlayerCode
    ) {

    }

    public function create(array $data): Player
    {
        $user = auth()->user();
        $data['verified_at'] = $this->isAutoVerified($user) ? now() : null;
        $data['is_verified'] = $this->isAutoVerified($user);
      
        $playerTrans = DB::transaction(function () use ($data) {
            $genderCode = strtoupper(substr($data['gender'], 0, 1));
           
            $data['player_code'] = $this->generatePlayerCode->handle(
                $data['organization_id'],
                $genderCode
            );
 
            return $this->createPlayer->handle($data);
        });
        
        return $playerTrans;


    }
    public function update(Player $player, array $data): Player
    {
          return $this->updatePlayer->handle($player, $data);
    }
    public function verify(): Player
    {
    }
    public function delete(): Player
    {

    }

      protected function isAutoVerified(User $user): bool
    {
        return $user->is_super_admin
            || $user->hasRole(RoleEnum::FEDERATION_ADMIN->value);
    }

}