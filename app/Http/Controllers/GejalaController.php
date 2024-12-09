<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use Inertia\Inertia;
use Illuminate\Http\Request;

class GejalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gejalas = Gejala::search(request('search'))->latest()->paginate(10)->withQueryString();
        return Inertia::render("Gejalas/Index", [
            'gejalas' => $gejalas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Gejalas/Manage");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'kode_gejala' => 'required|max:10|unique:gejalas,kode_gejala',
            'name' => 'required|min:5',
        ]);

        Gejala::create($validateData);

        return redirect()->route("gejalas.index")->with("success", "Gejala baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Gejala $gejala)
    {
        return Inertia::render("Gejalas/Show", [
            "gejala" => $gejala
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gejala $gejala)
    {
        return Inertia::render("Gejalas/Manage", [
            'gejala' => $gejala
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gejala $gejala)
    {
        $validateData = $request->validate([
            'kode_gejala' => 'required|max:10|unique:gejalas,kode_gejala,' . $gejala->id,
            'name' => 'required|min:5',
        ]);

        $gejala->update($validateData);

        return redirect()->route("gejalas.index")->with("success", "Gejala berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gejala $gejala)
    {
        $gejala->delete();

        return back()->with('success', 'Gejala berhasil dihapus!');
    }
}
