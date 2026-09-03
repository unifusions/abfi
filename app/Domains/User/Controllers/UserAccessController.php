<?php 

namespace App\Domains\User\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class UserAccessController extends UserController
{
    public function changePassword(Request $request,User $user){
     
        $user->update(['password' => Hash::make($request->password)]);
        return redirect()->route('compliance.users.index')->with(['success' => "User {$user->name} password has been changed successfully"]);
    }

    public function deactiveUser(User $user){
        $user->update(['is_active' => false]);
        return redirect()->route('compliance.users.index')->with(['success' => 'User has been deactivated successfully']);
    }
}