<?php

namespace App\Domains\Player\Controllers;

use App\Domains\Compliance\Models\BaseballPosition;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('player/player-index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('player/player-create', [
            'baseball_positions' => BaseballPosition::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
     return inertia('player/player-view');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
