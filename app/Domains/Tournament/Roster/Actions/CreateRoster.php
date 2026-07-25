<?php

namespace App\Domains\Tournament\Roster\Actions;

use App\Domains\Tournament\Roster\Models\Roster;

class CreateRoster{
    public function handle(array $data) : Roster{
         $user= auth()->user();
        $data['created_by'] = $user->id;
        $roster = Roster::create($data);
        return $roster;

    }
}