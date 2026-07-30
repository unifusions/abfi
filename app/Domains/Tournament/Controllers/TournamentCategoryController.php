<?php 

namespace App\Domains\Tournament\Controllers;

use App\Domains\Compliance\Models\Category;
use App\Http\Controllers\Controller;

class TournamentCategoryController extends Controller{
    public function index(){
        
        return inertia('tournament/category/category-index', ["categories" => Category::all()]);
    }
}