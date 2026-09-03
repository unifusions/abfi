<?php 

namespace App\Domains\Tournament\Controllers;

use App\Domains\Compliance\Models\Category;
use App\Domains\Tournament\Requests\StoreCategoryRequest;
use App\Http\Controllers\Controller;

class TournamentCategoryController extends Controller{
    public function index(){
        
        return inertia('compliance/tournament-categories/category-index', ["categories" => Category::all()]);
    }

    public function store(StoreCategoryRequest $request){
        
        $data = $request->validated();
        Category::create($data);
        return back()->with(['success' => 'Category has been created successfully']);
    }
}