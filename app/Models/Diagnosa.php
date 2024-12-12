<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnosa extends Model
{
    /** @use HasFactory<\Database\Factories\DiagnosaFactory> */
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'pilihan_gejala' => "array"
    ];

    public function scopeSearch($query, $keyword)
    {
        $query->when($keyword ?? false, function ($query, $keyword) {
            $query->where('name_user', "like", "%$keyword%")
                ->orWhere('kode_diagnosa', "like", "%$keyword%")
                ->orWhereHas('penyakit', function ($query) use ($keyword) {
                    $query->where('name', "like", "%$keyword%");
                });
        });
    }

    public function penyakit()
    {
        return $this->belongsTo(Penyakit::class, "penyakit_id", "id");
    }
}
