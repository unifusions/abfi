<?php 

namespace App\Http\Controllers\Static;

use App\Http\Controllers\Controller;

class AboutController extends Controller{
    public function history(){
        return view('static.about.history');
    }
}