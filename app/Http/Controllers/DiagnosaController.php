<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Inertia\Inertia;
use App\Models\Gejala;
use App\Models\Diagnosa;
use App\Models\Penyakit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DiagnosaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diagnosas = Diagnosa::query();

        if (!Auth::user()->hasRole("admin")) {
            $diagnosas = $diagnosas->where('user_id', Auth::user()->id);
        }

        $diagnosas = $diagnosas->search(request('search'))->with('penyakit')->latest()->paginate(10)->withQueryString();

        return Inertia::render("Diagnosas/Index", [
            'diagnosas' => $diagnosas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $gejalas = Gejala::get();
        return Inertia::render("Diagnosas/Create", [
            'gejalas' => $gejalas
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name_user' => 'required',
            'pilihan_gejala' => 'array',
        ]);

        $gejalaPilihanUser = $validateData['pilihan_gejala'];

        if (empty($gejalaPilihanUser)) {
            return back()->with('error', "Pastikan untuk memilih gejala");
        }

        // Mencari nilai belief dan plausibility gejala dari rule
        $gejalaWithBP = [];
        foreach ($gejalaPilihanUser as $key => $gejala) {
            $belief = Rule::with('gejala')->where('gejala_id', $gejala['id'])->first();
            $gejalaWithBP[$belief->gejala->kode_gejala] = [
                'penyakit_id' => $belief->penyakit_id,
                'belief' => $belief->belief,
                'plausibility' => $belief->plausibility,
            ];
        }

        $massFunc = [];

        foreach ($gejalaWithBP as $data) {
            $massFunc = $this->dempsterCombination($massFunc, [
                $data['penyakit_id'] => [
                    'belief' => $data['belief'],
                    'plausibility' => $data['plausibility'],
                ]
            ]);
        }

        $max = 0;
        $penyakitId = "";
        foreach ($massFunc as $key => $value) {
            if ($value['belief'] >  $max) {
                $max = $value['belief'];
                $penyakitId = $key;
            };
        }

        $hasilPersentase = round($max, 2) * 100;
        $kodeDiagnosa = "DIAGNOSA-" . rand(1000, 9999);

        if ($hasilPersentase < 50) {
            return redirect()->route('diagnosas.noresult', $kodeDiagnosa);
        }

        if (Auth::user()) {
            $validateData['user_id'] = Auth::user()->id;
        }

        $validateData['penyakit_id'] = $penyakitId;
        $validateData['kode_diagnosa'] = $kodeDiagnosa;
        $validateData['hasil'] = $hasilPersentase;

        $diagnosa = Diagnosa::create($validateData);

        return redirect()->route("diagnosas.show", $diagnosa->id)->with("success", "Hasil diagnosa telah selesai!");
    }

    function dempsterCombination($mass1, $mass2)
    {
        if (empty($mass1)) {
            return $mass2;
        }

        // Variabel sementara untuk menyimpan nilai kombinasi
        $tempResult = [];

        foreach ($mass1 as $penyakitId1 => $data1) {
            foreach ($mass2 as $penyakitId2 => $data2) {

                if (!isset($tempResult[$penyakitId1])) {
                    $tempResult[$penyakitId1] = ["belief" => 0, "plausibility" => 0];
                }

                if (!isset($tempResult[$penyakitId2])) {
                    $tempResult[$penyakitId2] = ["belief" => 0, "plausibility" => 0];
                }

                if ($penyakitId1 == $penyakitId2) {
                    $tempResult[$penyakitId1]['belief'] += $data1['belief'] * $data2['belief'];

                    $tempResult[$penyakitId1]['belief'] += $data1['plausibility'] * $data2['belief'];
                    $tempResult[$penyakitId1]['belief'] += $data1['belief'] * $data2['plausibility'];
                    $tempResult[$penyakitId1]['plausibility'] += $data1['plausibility'] * $data2['plausibility'];
                } else {

                    $tempResult[$penyakitId1]['belief'] += $data1['belief'] * $data2['plausibility'];

                    $tempResult[$penyakitId2]['belief'] += $data1['plausibility'] * $data2['belief'];

                    $tempResult[$penyakitId1]['plausibility'] += $data1['plausibility'] * $data2['plausibility'];
                }
            }
        }


        return $tempResult;
    }

    /**
     * Display the specified resource.
     */
    public function show(Diagnosa $diagnosa)
    {
        $diagnosa = $diagnosa->load('penyakit');
        return Inertia::render("Diagnosas/Show", [
            "diagnosa" => $diagnosa
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diagnosa $diagnosa)
    {
        $diagnosa->delete();

        return back()->with('success', 'Diagnosa berhasil dihapus!');
    }

    public function noresult($kode_diagnosa)
    {
        return Inertia::render("Diagnosas/Noresult", [
            'kode_diagnosa' => $kode_diagnosa
        ]);
    }
}
