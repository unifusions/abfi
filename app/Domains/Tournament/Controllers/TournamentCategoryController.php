<?php 

namespace App\Domains\Tournament\Controllers;

use App\Domains\Compliance\Models\Category;
use App\Http\Controllers\Controller;

class TournamentCategoryController extends Controller{
    public function index(){
        
        return inertia('compliance/tournament-categories/category-index', ["categories" => Category::all()]);
    }
}