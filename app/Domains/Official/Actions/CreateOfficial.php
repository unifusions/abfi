<?php 

namespace App\Domains\Official\Actions;

use App\Domains\Official\Models\Official;

class CreateOfficial{
     public function handle(array $data) : Official {

 
        $data['created_by'] = auth()->user()->id;
         
        
        
        $official = Official::create($data);
         $official->attachProfileMedia( $data['media_id']);
        return $official;
    }
}