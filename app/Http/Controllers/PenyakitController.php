<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Penyakit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PenyakitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $penyakits = Penyakit::search(request('search'))->latest()->paginate(10)->withQueryString();
        return Inertia::render("Penyakits/Index", [
            'penyakits' => $penyakits
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Penyakits/Manage");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'kode_penyakit' => 'required|max:10|unique:penyakits,kode_penyakit',
            'name' => 'required|min:5',
            'description' => 'required|min:20',
            'solution' => 'required|min:20',
            'image' => 'required|image|mimes:jpg,jpeg,png',
        ]);

        // saving image
        $image = $request->file('image');
        $imagePath = $image->store("penyakits");
        $validateData['image'] = $imagePath;

        Penyakit::create($validateData);

        return redirect()->route("penyakits.index")->with("success", "Penyakit baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Penyakit $penyakit)
    {
        return Inertia::render("Penyakits/Show", [
            "penyakit" => $penyakit
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Penyakit $penyakit)
    {
        return Inertia::render("Penyakits/Manage", [
            'penyakit' => $penyakit
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Penyakit $penyakit, Request $request)
    {

        $rules = [
            'kode_penyakit' => 'required|max:10|unique:penyakits,kode_penyakit,' . $penyakit->id,
            'name' => 'required|min:5',
            'description' => 'required|min:20',
            'solution' => 'required|min:20',
        ];

        $validateData = $request->validate($rules);

        $penyakit->update($validateData);

        return redirect()->route("penyakits.index")->with("success", "Penyakit berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penyakit $penyakit)
    {
        if ($penyakit->image) {
            Storage::delete($penyakit->image);
        }

        $penyakit->delete();

        return back()->with('success', 'Penyakit berhasil dihapus!');
    }
}
