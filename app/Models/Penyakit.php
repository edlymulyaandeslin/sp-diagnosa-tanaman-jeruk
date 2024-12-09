<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penyakit extends Model
{
    /** @use HasFactory<\Database\Factories\PenyakitFactory> */
    use HasFactory;

    protected $guarded = [];

    public function scopeSearch($query, $keyword)
    {
        $query->when($keyword ?? false, function ($query, $keyword) {
            $query->where('kode_penyakit', "like", "%$keyword%")
                ->orWhere('name', "like", "%$keyword%");
        });
    }
}
