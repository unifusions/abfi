<?php 

namespace App\Http\Controllers\Static;

use App\Domains\Organization\Models\Organization;
use App\Http\Controllers\Controller;

class AboutController extends Controller{
    public function history(){
        return view('static.about.history');
    }

    public function affiliate(){
        return view('static.about.affiliate', 
        [
            'associations' => Organization::all(),
        ]
    );
    }
}