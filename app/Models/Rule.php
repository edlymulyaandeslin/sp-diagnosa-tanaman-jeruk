<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    /** @use HasFactory<\Database\Factories\RuleFactory> */
    use HasFactory;

    protected $guarded = [];

    public function scopeSearch($query, $keyword)
    {
        $query->when($keyword ?? false, function ($query, $keyword) {
            $query->whereHas('penyakit', function ($query) use ($keyword) {
                $query->where('name', "like", "%$keyword%");
            })
                ->orWhereHas('gejala', function ($query) use ($keyword) {
                    $query->where('name', "like", "%$keyword%");
                });
        });
    }

    public function penyakit()
    {
        return $this->belongsTo(Penyakit::class);
    }

    public function gejala()
    {
        return $this->belongsTo(Gejala::class);
    }
}
