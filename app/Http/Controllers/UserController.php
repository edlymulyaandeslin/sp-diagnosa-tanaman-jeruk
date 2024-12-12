<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('roles')->latest()
            ->paginate(10)
            ->withQueryString();
        return Inertia::render("Users/Index", [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        return Inertia::render("Users/Manage", [
            'roles' => $roles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            "password" => "required",
        ]);

        $role = $request->role;

        $validateData['password'] = bcrypt($validateData['password']);

        $user = User::create($validateData);

        $user->syncRoles($role);

        return redirect()->route("users.index")->with("success", "User baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render("Users/Show", [
            "user" => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $roles = Role::all();
        $user = $user->load('roles');
        return Inertia::render("Users/Manage", [
            'roles' => $roles,
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {

        $validateData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $user->id,
            "password" => "nullable",
        ]);

        if (!$validateData['password']) {
            $validateData['password'] = $user->password;
        } else {
            $validateData['password'] = bcrypt($validateData['password']);
        }

        $role = $request->role;

        $user->update($validateData);

        $user->syncRoles($role);

        return redirect()->route("users.index")->with("success", "User berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'User berhasil dihapus!');
    }
}
