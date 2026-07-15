<?php

namespace App\Domains\Venue\Controllers;

use App\Domains\Venue\Models\Venue;
use App\Domains\Venue\Resources\VenueResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class VenueController extends Controller
{

    public function store(Request $request)
    {

        $addedVenue = Venue::create([
            'name' => $request->name,
            'state_id' => $request->state_id,
        ]);
        $addedVenue->load('state');

        return
            response()->json([
                'data' => new VenueResource($addedVenue),
                "toasts" => [
                    [
                        "type" => "success",
                        "message" => "Venue added successfully"
                    ],
                ]
            ]);

    }
}