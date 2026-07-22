<?php 

namespace App\Domains\Player\Actions;

use App\Domains\Media\Enums\MediaCollectionEnum;
use App\Domains\Organization\Models\Organization;
use App\Domains\Player\Models\Player;
use App\Domains\Player\Actions\GeneratePlayerCode;

class CreatePlayer{

 
    public function handle(array $data) : Player {

 
        $data['created_by'] = auth()->user()->id;
         
        
        $player = Player::create($data);
        $player->positions()->sync($data['player_positions']);
        $player->attachProfileMedia( $data['media_id']);
        return $player;
    }
}