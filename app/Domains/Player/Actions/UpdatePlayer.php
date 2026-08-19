<?php

namespace App\Domains\Player\Actions;

use App\Domains\Player\Models\Player;

class UpdatePlayer
{
    public function handle(Player $player, array $data): Player
    {
        $data['updated_by'] = auth()->user()->id;
        $player->update($data);
        if ($data['player_positions'])
            $player->positions()->sync($data['player_positions']);
        if ($data['media_id'])
            $player->attachProfileMedia($data['media_id']);
        return $player->fresh([
            'positions',
            'mediaLinks.media',
        ]);
    }
}