<?php

namespace App\Domains\AccessControl\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole{
    public function handle(Request $request, Closure $next,string  $role){
         if (! auth()->check()) {
            abort(401);
        }

        if (! auth()->user()->hasRole($role)) {
            abort(403);
        }

        return $next($request);
    }
}