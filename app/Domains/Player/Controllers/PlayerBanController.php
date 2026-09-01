<?php 

namespace App\Domains\Player\Controllers;

use App\Domains\Player\Models\Player;
use App\Http\Controllers\Controller;

class PlayerBanController extends Controller{

    public function __invoke(Player $player){
        $player->update([
            'is_active' => false
        ]);

        return back()->with(['success' => "Player - {$player->player_code} has been banned"]);
    }
}