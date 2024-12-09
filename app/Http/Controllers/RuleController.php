<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Inertia\Inertia;
use App\Models\Gejala;
use App\Models\Penyakit;
use Illuminate\Http\Request;

class RuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rules = Rule::with(['penyakit', 'gejala'])->search(request('search'))->latest()->paginate(10)->withQueryString();
        return Inertia::render("Rules/Index", [
            'rules' => $rules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $penyakits = Penyakit::get();
        $gejalas = Gejala::get();
        return Inertia::render("Rules/Manage", [
            'penyakits' => $penyakits,
            'gejalas' => $gejalas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'penyakit_id' => 'required|exists:penyakits,id',
            'gejala_id' => 'required|exists:gejalas,id',
            'belief' => 'required|numeric|between:0,1',
        ]);

        $validateData['plausibility'] = 1 - $validateData['belief'];

        Rule::create($validateData);

        return redirect()->route("rules.index")->with("success", "Rule baru berhasil ditambahkan!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Rule $rule)
    {
        return Inertia::render("Rules/Show", [
            "rule" => $rule
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rule $rule)
    {
        $penyakits = Penyakit::get();
        $gejalas = Gejala::get();
        return Inertia::render("Rules/Manage", [
            'penyakits' => $penyakits,
            'gejalas' => $gejalas,
            'rule' => $rule
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rule $rule)
    {
        $validateData = $request->validate([
            'penyakit_id' => 'required|exists:penyakits,id',
            'gejala_id' => 'required|exists:gejalas,id',
            'belief' => 'required|numeric|between:0,1',
        ]);

        $validateData['plausibility'] = 1 - $validateData['belief'];

        $rule->update($validateData);

        return redirect()->route("rules.index")->with("success", "Rule berhasil diperbarui!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rule $rule)
    {
        $rule->delete();

        return back()->with('success', 'Rule berhasil dihapus!');
    }
}
