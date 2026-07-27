<?php 

namespace App\Domains\Tournament\Roster\Services;

use App\Domains\Player\Actions\CreatePlayer;
use App\Domains\Player\Actions\GeneratePlayerCode;
use App\Domains\Player\Models\Player;
use App\Domains\Tournament\Roster\Models\RosterPlayer;
use DB;

class RosterPlayerCreationService {

public function __construct(
    protected CreatePlayer $createPlayer,
    protected GeneratePlayerCode $generatePlayerCode
){}
    public function create(array $data) : RosterPlayer{
        $user = auth()->user();
        
      
        $playerTrans = DB::transaction(function () use ($data) {
            $genderCode = strtoupper(substr($data['gender'], 0, 1));
           
            $data['player_code'] = $this->generatePlayerCode->handle(
                $data['organization_id'],
                $genderCode
            );
  $player = $this->createPlayer->handle($data);

        $rosterPlayer = RosterPlayer::create([
            'roster_id' => $data['roster_id'],
            'player_id' => $player->id,
        ]);
            return $rosterPlayer;
        });
        
        return $playerTrans;
    }
}