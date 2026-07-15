<?php

namespace App\Domains\AccessControl\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckPermission
{

    public function handle(Request $request, Closure $next, string $permission)
    {
        if (!auth()->check()) {
            abort(401);
        }
        if (!auth()->user()->hasPermission($permission)) {
            abort(403);

        }

        return $next($request);
    }
}