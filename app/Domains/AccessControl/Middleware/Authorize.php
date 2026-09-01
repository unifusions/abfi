<?php

namespace App\Domains\AccessControl\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Authorize
{
    public function handle(
        Request $request,
        Closure $next,
        string $type,
        string $value
    ): Response {
        
       
        $user = auth()->user();

        if ($user->is_super_admin) {


            return $next($request);
        }

        if (!auth()->check()) {
            abort(401);
        }

      

        switch ($type) {

            case 'role':

                $roles = explode('|', $value);
                

                if (!$user->hasAnyRole($roles)) {
                    abort(403, 'Unauthorized.');
                }

                break;

            case 'permission':

                $permissions = explode('|', $value);
 
                if (!$user->hasPermission($permissions)) {
                    abort(403, 'Unauthorized.');
                }

                break;

            default:

                abort(500, "Unknown authorization type [{$type}].");

        }

        return $next($request);
    }
}