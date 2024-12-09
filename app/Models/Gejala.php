<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gejala extends Model
{
    /** @use HasFactory<\Database\Factories\GejalaFactory> */
    use HasFactory;

    protected $guarded = [];

    public function scopeSearch($query, $keyword)
    {
        $query->when($keyword ?? false, function ($query, $keyword) {
            $query->where('kode_gejala', "like", "%$keyword%")
                ->orWhere('name', "like", "%$keyword%");
        });
    }
}
