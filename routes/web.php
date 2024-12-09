<?php

use App\Http\Controllers\GejalaController;
use App\Http\Controllers\PenyakitController;
use Inertia\Inertia;
use App\Models\Penyakit;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RuleController;
use Illuminate\Http\Request;

Route::get('/', function () {
    $penyakits = Penyakit::get();
    return Inertia::render('Welcome', [
        "penyakits" => $penyakits
    ]);
})->name('home');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route Penyakit
    Route::get("penyakits", [PenyakitController::class, 'index'])->name('penyakits.index');
    Route::get("penyakits/create", [PenyakitController::class, 'create'])->name('penyakits.create');
    Route::post("penyakits", [PenyakitController::class, 'store'])->name('penyakits.store');
    Route::get("penyakits/{penyakit:kode_penyakit}/edit", [PenyakitController::class, 'edit'])->name('penyakits.edit');
    Route::put("penyakits/{penyakit:kode_penyakit}", [PenyakitController::class, 'update'])->name('penyakits.update');
    Route::delete("penyakits/{penyakit:kode_penyakit}", [PenyakitController::class, 'destroy'])->name('penyakits.destroy');

    // Route gejala
    Route::get("gejalas", [GejalaController::class, 'index'])->name('gejalas.index');
    Route::get("gejalas/create", [GejalaController::class, 'create'])->name('gejalas.create');
    Route::post("gejalas", [GejalaController::class, 'store'])->name('gejalas.store');
    Route::get("gejalas/{gejala:kode_gejala}/edit", [GejalaController::class, 'edit'])->name('gejalas.edit');
    Route::put("gejalas/{gejala:kode_gejala}", [GejalaController::class, 'update'])->name('gejalas.update');
    Route::delete("gejalas/{gejala:kode_gejala}", [GejalaController::class, 'destroy'])->name('gejalas.destroy');

    // Route rule
    Route::get("rules", [RuleController::class, 'index'])->name('rules.index');
    Route::get("rules/create", [RuleController::class, 'create'])->name('rules.create');
    Route::post("rules", [RuleController::class, 'store'])->name('rules.store');
    Route::get("rules/{rule:id}/edit", [RuleController::class, 'edit'])->name('rules.edit');
    Route::put("rules/{rule:id}", [RuleController::class, 'update'])->name('rules.update');
    Route::delete("rules/{rule:id}", [RuleController::class, 'destroy'])->name('rules.destroy');
});

Route::get("penyakits/{penyakit:kode_penyakit}", [PenyakitController::class, 'show'])->name('penyakits.show');
require __DIR__ . '/auth.php';
