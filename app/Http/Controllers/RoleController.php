<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::latest()->paginate(10)->withQueryString();
        return Inertia::render("Roles/Index", [
            'roles' => $roles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Roles/Manage");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|unique:roles,name',
        ]);

        Role::create($validateData);

        return redirect()->route("roles.index")->with("success", "Role baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        return Inertia::render("Roles/Show", [
            "role" => $role
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        return Inertia::render("Roles/Manage", [
            'role' => $role
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        $validateData = $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
        ]);

        $role->update($validateData);

        return redirect()->route("roles.index")->with("success", "Role berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return back()->with('success', 'Role berhasil dihapus!');
    }
}
