<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permissions = Permission::latest()->paginate(10)->withQueryString();
        return Inertia::render("Permissions/Index", [
            'permissions' => $permissions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Permissions/Manage");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required|unique:permissions,name',
        ]);

        Permission::create($validateData);

        return redirect()->route("permissions.index")->with("success", "Permission baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission $permission)
    {
        return Inertia::render("Permissions/Show", [
            "permission" => $permission
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission $permission)
    {
        return Inertia::render("Permissions/Manage", [
            'permission' => $permission
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permission $permission)
    {
        $validateData = $request->validate([
            'name' => 'required|unique:permissions,name,' . $permission->id,
        ]);

        $permission->update($validateData);

        return redirect()->route("permissions.index")->with("success", "Permission berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return back()->with('success', 'Permission berhasil dihapus!');
    }
}
